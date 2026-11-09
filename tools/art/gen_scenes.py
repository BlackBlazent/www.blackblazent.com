import json, os
from pathlib import Path
from playwright.sync_api import sync_playwright
from PIL import Image
HERE=Path(__file__).parent
OUT=Path(os.environ.get("OUT",HERE/"out_scene"));OUT.mkdir(parents=True,exist_ok=True)
TPL=(HERE/"scene.html").read_text()
NODES=["software","ai","security","defense","embedded","robotics","physical","wearable"]
BGS=[("contour","hero-contour",3,1920,1080),("plate","hero-plate",5,1920,1080),("trace","hero-trace",9,1920,1080)]
with sync_playwright() as p:
    b=p.chromium.launch();pg=b.new_page()
    def shot(d,path,q=82):
        (HERE/"_s.html").write_text(TPL.replace("__DATA__",json.dumps(d)))
        pg.set_viewport_size({"width":d["w"],"height":d["h"]});pg.goto((HERE/"_s.html").as_uri());pg.wait_for_timeout(150)
        png=path.with_suffix(".png");pg.screenshot(path=str(png))
        Image.open(png).convert("RGB").save(path.with_suffix(".webp"),"WEBP",quality=q,method=6);png.unlink()
    for n in NODES: shot(dict(mode="node",kind=n,w=512,h=512,seed=1),OUT/f"orbit-{n}",86)
    for k,name,seed,w,h in BGS: shot(dict(mode="bg",kind=k,w=w,h=h,seed=seed,bg="#060606"),OUT/name,74)
    b.close()
print("ok")
