import json, os, shutil
from pathlib import Path
from playwright.sync_api import sync_playwright
from PIL import Image

HERE = Path(__file__).parent
OUT = Path(os.environ.get("OUT", HERE / "out"))
OUT.mkdir(parents=True, exist_ok=True)

shutil.copy(HERE / "node_modules/@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2", HERE / "serif.woff2")
shutil.copy(HERE / "node_modules/@fontsource-variable/space-grotesk/files/space-grotesk-latin-wght-normal.woff2", HERE / "grotesk.woff2")

PALETTES = {
    "raven": {"bg": "#060507", "a": "#ff3d81", "b": "#38dbe9", "c": "#ff8a4d"},
    "vine": {"bg": "#050706", "a": "#6fd08c", "b": "#e9c46a", "c": "#3aa6a0"},
    "blaze": {"bg": "#050505", "a": "#ff7a3d", "b": "#ffb36b", "c": "#b5551f"},
}

# id, palette, motif, tag, title, brand, seed
SPECS = [
    # BlackMusic product
    ("blackmusic-cover", "raven", "vinyl", "Music Player", "Black\nMusic", "RavenSyntha", 3),
    ("bm-features", "raven", "wave", "Features", "Everything your\nlibrary needs", "BlackMusic", 11),
    ("bm-future", "raven", "radial", "Direction", "Where it\ngoes next", "BlackMusic", 5),
    ("bm-tech", "raven", "nodes", "Technology", "Built to run\nlocal first", "BlackMusic", 8),
    ("bm-license", "raven", "layers", "License", "Open source,\nopen terms", "BlackMusic", 2),
    ("bm-privacy", "raven", "lock", "Policy", "Privacy\nPolicy", "BlackMusic", 4),
    ("bm-terms", "raven", "doc", "Terms", "Terms and\nConditions", "BlackMusic", 6),
    # Privacy chapters
    ("bm-p-library", "raven", "spectrum", "Local first", "Your music stays\non your device", "BlackMusic Privacy", 21),
    ("bm-p-permissions", "raven", "sliders", "Permissions", "What the app asks\nfor, and why", "BlackMusic Privacy", 22),
    ("bm-p-accounts", "raven", "rings", "Accounts", "Sign in, sync\nand rooms", "BlackMusic Privacy", 23),
    ("bm-p-services", "raven", "nodes", "Services", "Third party\nservices", "BlackMusic Privacy", 24),
    ("bm-p-promos", "raven", "wave", "Promotions", "Promotions and\naffiliate links", "BlackMusic Privacy", 25),
    ("bm-p-rights", "raven", "lock", "Your rights", "Your data,\nyour call", "BlackMusic Privacy", 26),
    ("bm-p-summary", "raven", "layers", "Summary", "Store data\nsummary", "BlackMusic Privacy", 27),
    # Terms chapters
    ("bm-t-agreement", "raven", "doc", "Agreement", "Using\nBlackMusic", "BlackMusic Terms", 31),
    ("bm-t-content", "raven", "vinyl", "Content", "Your music,\nyour responsibility", "BlackMusic Terms", 32),
    ("bm-t-services", "raven", "nodes", "Services", "Online services\nand acceptable use", "BlackMusic Terms", 33),
    ("bm-t-accounts", "raven", "rings", "Accounts", "Accounts, promotions\nand updates", "BlackMusic Terms", 34),
    ("bm-t-liability", "raven", "layers", "Liability", "Warranties and\nliability", "BlackMusic Terms", 35),
    ("bm-t-legal", "raven", "doc", "Legal", "Ownership, ending\nand governing law", "BlackMusic Terms", 36),
    ("bm-delete", "raven", "lock", "Account", "Delete your\naccount", "BlackMusic", 37),
    # Vineward
    ("vineward-cover", "vine", "nodes", "Ministry Leadership", "Vineward", "Vineward", 14),
    # Art only variants for card backgrounds (no baked in text)
    ("blackmusic-art", "raven", "vinyl", "", "", "", 3),
    ("vineward-art", "vine", "nodes", "", "", "", 14),
    # Website legal
    ("site-p-collect", "blaze", "spectrum", "Privacy", "What this\nsite collects", "BlackBlazent", 41),
    ("site-p-third", "blaze", "nodes", "Privacy", "Third party\nrequests", "BlackBlazent", 42),
    ("site-p-rights", "blaze", "lock", "Privacy", "Your choices\nand contact", "BlackBlazent", 43),
    ("site-t-use", "blaze", "doc", "Terms", "Using this\nwebsite", "BlackBlazent", 44),
    ("site-t-content", "blaze", "layers", "Terms", "Content and\nownership", "BlackBlazent", 45),
    ("site-t-liability", "blaze", "rings", "Terms", "Liability and\nchanges", "BlackBlazent", 46),
]

TEMPLATE = (HERE / "template.html").read_text()


def render(page, spec, width, height, name, og=False):
    sid, pal, motif, tag, title, brand, seed = spec
    data = {"palette": PALETTES[pal], "motif": motif, "tag": tag, "title": title, "brand": brand, "seed": seed, "w": width, "h": height, "og": og}
    html = TEMPLATE.replace("__DATA__", json.dumps(data))
    (HERE / "_render.html").write_text(html)
    page.set_viewport_size({"width": width, "height": height})
    page.goto((HERE / "_render.html").as_uri())
    page.evaluate("document.fonts.ready")
    page.wait_for_timeout(250)
    png = OUT / f"{name}.png"
    page.screenshot(path=str(png))
    img = Image.open(png).convert("RGB")
    if og:
        img.save(OUT / f"{name}.png", optimize=True)
    else:
        img.save(OUT / f"{name}.webp", "WEBP", quality=84, method=6)
        png.unlink()


with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page()
    for s in SPECS:
        render(pg, s, 1600, 760, s[0])
    render(pg, ("x", "blaze", "rings", "BlackBlazent", "Software beyond\nthe expected", "BlackBlazent", 9), 1200, 630, "og-blackblazent", og=True)
    render(pg, ("x", "raven", "vinyl", "Music Player", "BlackMusic", "RavenSyntha", 3), 1200, 630, "og-blackmusic", og=True)
    b.close()
print("done", len(SPECS))
