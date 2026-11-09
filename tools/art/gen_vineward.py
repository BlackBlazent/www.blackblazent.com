import json, os
from pathlib import Path
from playwright.sync_api import sync_playwright
from PIL import Image
HERE=Path(__file__).parent
OUT=Path(os.environ.get("OUT",HERE/"out_vw"));OUT.mkdir(parents=True,exist_ok=True)
TPL=(HERE/"art.html").read_text()
PAL=["#7ed49a","#e9c46a","#3aa6a0"]; BG="#040605"
S=[ # id, motif, tag, title, brand, seed
("vineward-cover","ladder","Ministry Leadership","Vineward","Vineward",1),
("vineward-art","multiply","","","",2),
("vw-features","rhythm","Features","Everything in\none place","Vineward",3),
("vw-journey","ladder","The journey","From first contact\nto sent","Vineward",4),
("vw-care","multiply","Leadership","Multiply with\nattention, not noise","Vineward",5),
("vw-materials","stack","Materials","Unlock what\nyou need to lead","Vineward",6),
("vw-privacy","shield","Policy","Privacy\nPolicy","Vineward",7),
("vw-terms","doc","Terms","Terms and\nConditions","Vineward",8),
("vw-p-1","people","Responsibility","Who is\nresponsible","Vineward Privacy",11),
("vw-p-2","rhythm","Information","What we collect\nand why","Vineward Privacy",12),
("vw-p-3","shield","Access","Who can see\nyour information","Vineward Privacy",13),
("vw-p-4","multiply","Providers","Service providers\nand sponsored links","Vineward Privacy",14),
("vw-p-5","stack","Retention","Keeping and\nprotecting data","Vineward Privacy",15),
("vw-p-6","people","Your rights","Your rights\nand children","Vineward Privacy",16),
("vw-p-7","doc","Contact","If something goes\nwrong, and contact","Vineward Privacy",17),
("vw-t-1","doc","Using Vineward","Using\nVineward","Vineward Terms",21),
("vw-t-2","people","Roles","Ministry\nroles","Vineward Terms",22),
("vw-t-3","stack","Content","Your content,\nmaterials, donations","Vineward Terms",23),
("vw-t-4","multiply","Third parties","Sponsored content\nand availability","Vineward Terms",24),
("vw-t-5","shield","Ending","Ending use, limits\nand governing law","Vineward Terms",25),
]
with sync_playwright() as p:
    b=p.chromium.launch();pg=b.new_page()
    for sid,m,tag,title,brand,seed in S:
        d=dict(w=1600,h=760,bg=BG,pal=PAL,motif=m,tag=tag,title=title,brand=brand,seed=seed)
        (HERE/"_r.html").write_text(TPL.replace("__DATA__",json.dumps(d)))
        pg.set_viewport_size({"width":1600,"height":760});pg.goto((HERE/"_r.html").as_uri());pg.evaluate("document.fonts.ready");pg.wait_for_timeout(200)
        png=OUT/f"{sid}.png";pg.screenshot(path=str(png))
        Image.open(png).convert("RGB").save(OUT/f"{sid}.webp","WEBP",quality=84,method=6);png.unlink()
    # og image
    d=dict(w=1200,h=630,bg=BG,pal=PAL,motif="ladder",tag="Ministry Leadership",title="Vineward",brand="Vineward",seed=1)
    (HERE/"_r.html").write_text(TPL.replace("__DATA__",json.dumps(d)))
    pg.set_viewport_size({"width":1200,"height":630});pg.goto((HERE/"_r.html").as_uri());pg.wait_for_timeout(200);pg.screenshot(path=str(OUT/"og-vineward.png"))
    b.close()
print("ok",len(S))
