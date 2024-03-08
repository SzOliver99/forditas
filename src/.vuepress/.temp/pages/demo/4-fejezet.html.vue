<template><div><h2 id="ragadd-meg-az-alapokat-webes-kepformatumok-teren" tabindex="-1"><a class="header-anchor" href="#ragadd-meg-az-alapokat-webes-kepformatumok-teren"><span>Ragadd meg az alapokat webes képformátumok terén.</span></a></h2>
<p>Számítógépek számos különböző képformátumot használnak, a legtöbb digitális kamera által rögzített JPEG formátumtól a fotográfusok által preferált RAW formátumig, az animált GIF formátumtól a vállalati TIFF formátumig. A legtöbb webböngésző lenyűgöző skálájú képformátumot tud megjeleníteni, azonban annak érdekében, hogy weboldalad általánosan elérhető legyen és gyorsan betöltődjön, megfelelő formátumokat kell választanod a weboldalaidban szereplő képekhez. Ez a szakasz áttekintést nyújt a kulcsfontosságú képformátumokról. A következő szakaszok részletesen bemutatják, hogyan használhatod a GIMP alkalmazást megfelelő képfájlok létrehozásához.</p>
<h3 id="annak-megertese-hogy-miert-fontos-a-kepfajl-merete" tabindex="-1"><a class="header-anchor" href="#annak-megertese-hogy-miert-fontos-a-kepfajl-merete"><span>Annak megértése hogy, miért fontos a képfájl mérete</span></a></h3>
<p>Ha weboldalakat készítesz, amelyeket az interneten közzéteszel, valószínűleg a fájlméreteket ésszerű minimumon akarod tartani, hogy a weboldalaid gyorsan betöltsék, még akkor is, ha a webhelyet hostoló szerver forgalmas, és a látogatók lassabb internetkapcsolatot használnak. Ha belső webhelyhez készítesz oldalakat, amelyeket az összes látogató gyors kapcsolatokon keresztül érhet el, a fájlméret kevésbé aggasztó lehet, de még így is a legtöbb vállalat és szervezet inkább megőrzi a sávszélességet, mintsem pazarolja azt.</p>
<p>Az HTML fájlok és a CSS fájlok csak szöveget tartalmaznak, így kis fájlméretekkel és gyors átvitellel rendelkeznek. A képfájlok, hangfájlok és videofájlok általában sokkal nagyobbak, és jelentősen növelhetik az adatmennyiséget, amit egy böngészőnek át kell küldenie a weboldal betöltéséhez. Tehát általában kompakt fájlformátumokat szeretnél választani ilyen médiafájlokhoz. Emellett olyan fájlokat is szeretnél létrehozni, amelyek megfelelő minőségűek a webhely számára, és nem a legmagasabb minőségű fájlokat szeretnéd közzétenni, amelyek nagyobb fájlmérettel rendelkeznének.</p>
<h3 id="azok-a-tenyezok-amelyek-befolyasoljak-a-kepfajl-meretet" tabindex="-1"><a class="header-anchor" href="#azok-a-tenyezok-amelyek-befolyasoljak-a-kepfajl-meretet"><span>Azok a tényezők, amelyek befolyásolják a képfájl méretét:</span></a></h3>
<ul>
<li>
<p><strong>Felbontás.</strong> Minél nagyobb egy kép méretei, annál több pixel található az képen, és annál nagyobb a fájlméret. Például egy 512 pixel széles és 384 pixel magas kép 196 608 pixelt tartalmaz; egy 1024 pixel széles és 768 pixel magas kép pedig 786 432 pixelt tartalmaz - négyzetes mértékegységben négyzetesen többet - mert kétszer olyan széles és kétszer olyan magas. Minden pixel adatot tartalmaz, ami hozzájárul a fájlmérethez.</p>
</li>
<li>
<p><strong>Fájlformátum.</strong> Különböző fájlformátumok különböző tömörítési algoritmusokat használnak,amelyek befolyásolják a fájlméretet. A kulcskülönbség a veszteséges tömörítés és a veszteségmentes tömörítés között van, amelyek a fájlméretet befolyásolják. A JPEG fájlformátum veszteséges tömörítést használ, ami csökkenti a fájlméretet, de csökkenti a képminőséget is, míg a PNG fájlformátum veszteségmentes tömörítést használ. Ennek eredményeként a JPEG fájlok általában kisebbek, mint a PNG fájlok, de alacsonyabb képminőséggel rendelkeznek.</p>
</li>
<li>
<p><strong>Színmélység.</strong> Minden színnek adatot kell igényelnie a fájlban történő reprezentáláshoz, tehát minél több színe van egy képnek, annál nagyobb lesz a fájlmérete.</p>
</li>
<li>
<p><strong>Tömörítési szint.</strong> Néhány fájlformátum, például a JPEG, lehetővé teszi a használt tömörítés szintjének beállítását. A nagyobb tömörítés kisebb fájlméreteket eredményez, de általában csökkenti a képminőséget is.</p>
</li>
<li>
<p><strong>Képtartalom.</strong> Minél bonyolultabb a kép tartalma, annál több adatra van szükség a fájlban történő reprezentáláshoz. Például egy színes tájkép fényképe sok színt tartalmaz és sok adatra van szükség, míg egy egyszerű vonalrajz - mondjuk, egy piros nyíl fekete háttérrel - viszonylag kevés adatra van szükség.</p>
</li>
<li>
<p><strong>Kép metaadatok.</strong> A metaadatok olyan adatok, amelyek leírják a képet, például annak GPS helyzetét,  a kamera záridőjét és rekeszértékét, valamint a színek számát. A metaadatok általában csak egy szerény mennyiségű helyet foglalnak el.</p>
</li>
</ul>
<h3 id="a-legelterjedtebben-hasznalt-webes-kepformatumok-megertese" tabindex="-1"><a class="header-anchor" href="#a-legelterjedtebben-hasznalt-webes-kepformatumok-megertese"><span>A legelterjedtebben használt webes képformátumok megértése</span></a></h3>
<p>A weben található legtöbb kép az alábbi négy formátumból egyiket használja:
• <strong>JPEG.</strong> A JPEG, a Joint Photographic Experts Group, veszteséges tömörítést használ, és jelentős mértékű fájlméretcsökkentést tud elérni. Szabályozhatod a tömörítés szintjét. A JPEG jó választás fényképekhez weboldalakon.</p>
<p>• <strong>PNG.</strong> A PNG, a Portable Network Graphics, veszteségmentes tömörítést használ a teljes minőségű képek eléréséhez, egy szerény mértékű fájlméretcsökkentéssel. A PNG fájlok elfogadható választás fényképekhez weboldalakon, de általában lényegesen nagyobbak, mint a JPEG fájlok ugyanazzal a tartalommal.</p>
<p>• <strong>GIF.</strong> A GIF, a Graphics Interchange Format, egy régebbi fájlformátum, amely legfeljebb 256 különböző színt használ. Ez a korlátozás csökkenti a fájlméretet, és a GIF veszteségmentes tömörítést alkalmaz annak további csökkentése érdekében. A színek korlátozása miatt a GIF alkalmatlan a fényképekhez, de alkalmas logókhoz és más grafikákhoz, amelyek csak egy korlátozott színkészletre van szükség. A GIF lehetővé teszi egyszerű mozgóképek létrehozását is.</p>
<ul>
<li><strong>SVG.</strong> Az SVG, a Scalable Vector Graphics, az Extensible Markup Language, XML, szövegét használja két dimenziós képek leírásához. Az SVG alkalmas olyan képek létrehozásához, amelyek alakzatokat és vonalakat használnak. A legtöbb fénykép- és grafikaszerkesztő képes JPEG, PNG és GIF fájlok létrehozására, valamint különféle egyéb formátumokra. A legtöbb illusztrációs alkalmazás exportálhat rajzokat SVG fájlként.</li>
</ul>
<h2 id="inditsd-el-a-gimp-et-es-hajtsd-vegre-az-alapveto-lepeseket" tabindex="-1"><a class="header-anchor" href="#inditsd-el-a-gimp-et-es-hajtsd-vegre-az-alapveto-lepeseket"><span>Indítsd el a GIMP-et és hajtsd végre az alapvető lépéseket.</span></a></h2>
<p>A GIMP — a GNU Képmanipulációs Program — egy erőteljes eszköz a képfájlok szerkesztéséhez. Ebben a szakaszban elkezded használni a GIMP-et a program indításával és egy képfájl megnyitásával benne. Amikor a képfájl megnyitva van, szükség szerint nagyítasz vagy kicsinyítesz. Amikor befejezted a változtatásokat a képfájlon, amint azt a következő szakaszokban részletezve lesz, az Overwrite parancsot használod a változtatások visszamentéséhez az eredeti képfájlba, felülírva azt. Ezután bezárod a képfájlt — és bezárod a GIMP-et is, ha már befejezted a munkát vele. Lásd a &quot;GIMP telepítése&quot; című részt az 1. fejezetben a GIMP telepítésével kapcsolatos utasításokért.</p>
<h3 id="inditsd-el-a-gimp-et-es-nyiss-meg-egy-kepfajlt" tabindex="-1"><a class="header-anchor" href="#inditsd-el-a-gimp-et-es-nyiss-meg-egy-kepfajlt"><span>Indítsd el a GIMP-et és nyiss meg egy képfájlt.</span></a></h3>
<ol>
<li>Indítsd el a GIMP-et a számítógéped operációs rendszeréhez tartozó szokásos módon. <br>
Például Windows esetén kattints a Start gombra a Start menü megnyitásához, majd kattints a GIMP-re.</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>A Mac-en kattints a <strong>Launchpad</strong> ikonra, hogy megjelenítse a Launchpad képernyőt, majd kattints a <strong>GIMP</strong>-re.</p>
</div>
<p>Linux esetén jelenítsd meg az alkalmazások listáját, majd kattints a <strong>GIMP</strong>-re.</p>
<p>A GIMP megnyílik.
2. Kattints a Fájl menüre. <br>
A Fájl menü megnyílik.</p>
<ol start="3">
<li>Kattints az &quot;Megnyitás&quot; lehetőségre.</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Windows és Linux rendszereken a Ctrl + O billentyűkombinációval is megjelenítheted a Megnyitás párbeszédpanelt. macOS rendszeren a Command + O billentyűkombinációval teheted ugyanezt.</p>
</div>
<p><img src="@source/demo/images/4-fejezet/70.1.oldal.png" alt="" loading="lazy">
<img src="@source/demo/images/4-fejezet/70.2.oldal.png" alt="" loading="lazy"></p>
<p>Az Open Image panele jelenik meg.</p>
<ol start="4">
<li>
<p>Navigálj el abba a mappába, amely tartalmazza a megnyitni kívánt képfájlt. <br>
<code v-pre>A)</code> A breadcrumb sáv mutatja az aktuális mappa elérési útvonalát.</p>
</li>
<li>
<p>Kattints a képfájlra. <br>
<code v-pre>B)</code> Az Előnézet dobozban megjelenik a kép előnézete.</p>
</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Ha az &quot;Előnézet létrehozásához kattintson&quot; üzenet jelenik meg az Előnézet dobozban, kattints rá a jelenlegi kép előnézetének létrehozásához.</p>
</div>
<ol start="6">
<li>Kattints az &quot;Open&quot; gombra.</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Ha megnyílik a &quot;Click to create preview&quot; párbeszédpanel, ami felkínálja a kép beágyazott színprofiljának átalakítását a GIMP beépített sRGB színprofiljára, kattints a &quot;Keep&quot; gombra.</p>
</div>
<p>A képfájl megnyílik.</p>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Több képfájlt is megnyithatsz egyszerre.</p>
</div>
<p><code v-pre>C)</code> A kép megjelenik az ablak közepén.</p>
<p><code v-pre>D)</code> A Eszköztár megjelenik a bal felső sarokban.</p>
<p><code v-pre>E)</code> A kép (thumbnail) formájában megjelenik a kép lapján az ablaktálcán, amely lehetővé teszi a navigálást az egyik nyitott képtől a másikig.</p>
<p><img src="@source/demo/images/4-fejezet/71.1.oldal.png" alt="" loading="lazy">
<img src="@source/demo/images/4-fejezet/71.2.oldal.png" alt="" loading="lazy"></p>
<div class="hint-container tip">
<p class="hint-container-title">TIPP:</p>
<p><strong>Miért sötét a GIMP felülete a számítógépemen, ellentétben a könyvben láthatóval?</strong>
A GIMP lehetőséget biztosít arra, hogy különböző színtémákból válassz a felhasználói felület számára. A téma megváltoztatásához kattints a Edit és Preferences menüpontra a Beállítási panel megnyitásához, majd kattints a Theme lehetőségre a bal oldalon. A Theme ablakban lépj a Kiválasztott téma mezőbe, és kattints az általad kívánt témára, majd kattints az OK gombra. Az alapértelmezett téma a Sötét; a könyv a Rendszer témát használja, amely olvashatóbb a nyomtatott oldalon, mint a Sötét téma.</p>
</div>
<h2 id="folytatva-a-gimp-inditasahoz-es-alapveto-lepesek-vegrehajtasahoz-szukseges-lepeseket" tabindex="-1"><a class="header-anchor" href="#folytatva-a-gimp-inditasahoz-es-alapveto-lepesek-vegrehajtasahoz-szukseges-lepeseket"><span>Folytatva a GIMP indításához és alapvető lépések végrehajtásához szükséges lépéseket:</span></a></h2>
<p>A GIMP lehetővé teszi, hogy közelítse vagy távolítsa el a képet, hogy lássa azt a területet, amellyel dolgozni szeretne. A GIMP két egyszerű módot kínál a nagyításra: először a Nézet menü Zoom folytatása a menüsorban; másodszor pedig a Zoom felugró menü a státuszsávban.  A Zoom felugró menü különféle előre beállított nagyítási százalékokat kínál, például 800%, 400%, 200%, 100%, 50%, 25% és 12,5%. A Zoom folytatás menü nagyobb rugalmasságot kínál, beleértve az &quot;Illeszkedés a képablakba&quot; parancsot és a &quot;Nagyítás a kiválasztáshoz&quot; parancsot, így általában hasznosabb.</p>
<h3 id="kozelites-vagy-tavolitas-a-kepfajlon" tabindex="-1"><a class="header-anchor" href="#kozelites-vagy-tavolitas-a-kepfajlon"><span>Közelítés vagy távolítás a képfájlon</span></a></h3>
<p><code v-pre>A)</code> Gyors nagyításhoz egy előre beállított százalékra kattinthatsz a Zoom lehetőségen,
majd választhatsz a Zoom felugró menüből.</p>
<ol>
<li>
<p>Kattints a View lehetőségre. <br>
A View menü megnyílik.</p>
</li>
<li>
<p>Kattints a Zoom lehetőségre. <br>
A Zoom folytatás menü megnyílik.</p>
<p><code v-pre>B)</code> Ha más százalékra szeretnél nagyítani, kattints az &quot;Other&quot; lehetőségre, állítsd be a nagyítási arányt,
például 1:6, vagy a nagyítási százalékot, például 18%, a Zoom arány párbeszédpanelen, majd kattints az OK gombra.</p>
<p><code v-pre>C)</code> Visszaállíthatod az előző nagyítási szintre a &quot;Nagyítás visszaállítása&quot; lehetőséggel.</p>
</li>
<li>
<p>Kattints az &quot;Fit Image in Window&quot; lehetőségre. <br>
Az kép megjelenik a megadott nagyítási szinten.</p>
<p>Az előző példát követve a teljes kép megjelenik az ablakban.</p>
</li>
</ol>
<p><img src="@source/demo/images/4-fejezet/72.1.oldal.png" alt="" loading="lazy">
<img src="@source/demo/images/4-fejezet/72.2.oldal.png" alt="" loading="lazy"></p>
<h3 id="valtozasok-mentese-egy-kepfajlba-es-annak-bezarasa" tabindex="-1"><a class="header-anchor" href="#valtozasok-mentese-egy-kepfajlba-es-annak-bezarasa"><span>Változások mentése egy képfájlba és annak bezárása.</span></a></h3>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>A kép módosítását követően a GIMP Felülírás parancsát használva
mentheti el a módosításokat az eredeti fájlba.
Ezután bezárja a fájlt. Ez az eljárás furcsának tűnhet, de hatékony.
Az alternatíva a módosítások mentése a GIMP XCF formátumú fájlba,
majd exportáld ezt a fájlt a kívánt képformátumban.</p>
</div>
<ol>
<li>
<p>A képen végzett módosítások után, kattintson a Fájl gombra. <br>
Megnyílik a Fájl menü.</p>
</li>
<li>
<p>Kattintson a Felülírás gombra. Ez a parancs megmutatja a fájl nevét, amelyet felülírja - például Overwrite vulcan_mini.png. <br>
A GIMP exportálja a fájlt, beleértve a módosításokat is, felülírja a meglévő fájlt.</p>
<p><code v-pre>D)</code> Az állapotsor leolvasása azt mutatja, hogy a fájl exportálása megtörtént.</p>
</li>
<li>
<p>Kattintson a Bezárás (X) gombra. <br>
A képfájl bezáródik.</p>
</li>
<li>
<p>Ha készen áll a GIMP bezárására, kattintson a Bezárás (X). <br>
A GIMP bezáródik.</p>
</li>
</ol>
<p><img src="@source/demo/images/4-fejezet/73.1.oldal.png" alt="" loading="lazy">
<img src="@source/demo/images/4-fejezet/73.2.oldal.png" alt="" loading="lazy"></p>
<div class="hint-container tip">
<p class="hint-container-title">TIPS</p>
<!-- | **Tudok nagyítani és kicsinyíteni a billentyűparancsok segítségével?** | **Mi az XCF?** |
| :- | :- |
| Igen. Nyomja meg a - gombot a kicsinyítéshez vagy a + nagyításhoz. Nyomja meg a Control+Shift+J a Fit Image in Window parancshoz. Nyomja meg az 5 gombot a nagyításhoz 1600%-ra,4 800%-ra,3 400%-ra,2 200%-ra vagy 1 100%-ra. A Shift hozzáadása a tört értékekhez tartozó billentyűkombinációkhoz: Nyomja meg a Shift+2 billentyűt a 50%-hoz, Shift+3 a 25%-hoz, Shift+4 a 12,5%-hoz, vagy Shift+5 a 6,25%-hoz. | Az XCF a GIMP natív képe formátuma, amelyben a GIMP alapértelmezeten tárolja a képadatokat. A rövidítés jelentése eXperimental Computing Facility. | -->
<p><strong>Tudok nagyítani és kicsinyíteni a billentyűparancsok segítségével?</strong></p>
<p>Igen. Nyomja meg a - gombot a kicsinyítéshez vagy a + nagyításhoz.
Nyomja meg a Control+Shift+J a Fit Image in Window parancshoz.
Nyomja meg az 5 gombot a nagyításhoz 1600%-ra,4 800%-ra,3 400%-ra,2 200%-ra vagy 1 100%-ra.
A Shift hozzáadása a tört értékekhez tartozó billentyűkombinációkhoz:
Nyomja meg a Shift+2 billentyűt a 50%-hoz, Shift+3 a 25%-hoz,
Shift+4 a 12,5%-hoz, vagy Shift+5 a 6,25%-hoz.</p>
<p><strong>Mi az XCF?</strong></p>
<p>Az XCF a GIMP natív képe formátuma,
amelyben a GIMP alapértelmezeten tárolja a képadatokat.
A rövidítés jelentése eXperimental Computing Facility.</p>
</div>
<h2 id="kep-elforgatasa-vagy-kiegyenesitese" tabindex="-1"><a class="header-anchor" href="#kep-elforgatasa-vagy-kiegyenesitese"><span>Kép elforgatása vagy kiegyenesítése</span></a></h2>
<p>A GIMP lehetővé teszi, hogy egy képet az óramutató járásával megegyező irányban 90°-kal, 90°-kal az óramutató járásával ellentétesen vagy 180°-kal elforgasson. Ezek a gyors elforgatások kiválóan alkalmasak a fejjel lefelé fordított vagy rossz tájolású fényképezőgéppel készített fényképek rögzítésére. A GIMP rendelkezik a Tetszőleges forgatás paranccsal is, amellyel elforgathat egy képet pontosan a kívánt szögben. A Tetszőleges elforgatás különösen hasznos egy kép kiegyenesítéséhez ferdén felvett képet.</p>
<p>A GIMP lehetővé teszi azt is, hogy egy képet vízszintesen vagy függőlegesen megfordítson. Egy kép vízszintes megfordítása a képet jobbra és balra, míg a kép függőleges megfordítása a kép tetejét és alját kapcsolja át.</p>
<ol>
<li>
<p>Nyissa meg a kívánt képfájlt elforgatni vagy kiegyenesíteni.</p>
</li>
<li>
<p>Ha szükséges, nagyítsa ki vagy kicsinyítse a képet.</p>
</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Ha a képet egyenesre kell igazítania de nem elforgatni, lépjen a 6. lépésre.</p>
</div>
<ol start="3">
<li>
<p>Kattintson a Kép gombra. Megnyílik a Kép menü.</p>
</li>
<li>
<p>Kattintson a Transform (Átalakítás) gombra. <br>
Megnyílik a Transform folytatás menü.</p>
<p><code v-pre>A)</code> A Vízszintesen megfordítva gombra kattintva megfordíthatja a képet.
a kép vízszintes irányba történő átfordításához.</p>
<p><code v-pre>B)</code> Kattintson a Függőlegesen átfordítás gombra a kép
függőleges átfordításához.</p>
</li>
<li>
<p>Kattintson a megfelelő Forgatás parancsra. Ebben a példában a 180°-os elforgatás parancsra kattint. <br>
<code v-pre>C)</code> A kép a megadott módon elfordul.</p>
</li>
<li>
<p>Ha a képet egyenesbe kell hoznia, kattintson a Kép gombra.Megnyílik a Kép menü.</p>
</li>
<li>
<p>Kattintson a Transform (Átalakítás) gombra. <br>
Megnyílik a Transform folytatás menü.</p>
</li>
<li>
<p>Kattintson a Tetszőleges elforgatás gombra. <br>
Megnyílik az Elforgatás párbeszédpanel.</p>
<p><code v-pre>D)</code> A célkereszt jelzi a középpontot. a forgatás középpontját. Lásd a tippet.</p>
</li>
</ol>
<p><img src="@source/demo/images/4-fejezet/74.1.oldal.png" alt="" loading="lazy">
<img src="@source/demo/images/4-fejezet/74.2.oldal.png" alt="" loading="lazy"></p>
<ol start="9">
<li>
<p>Húzza a csúszkát a szög beállításához.</p>
<p><code v-pre>E)</code> Ha ismeri a pontos szöget forgatáshoz szükséges pontos értéket, megadhatja azt a Szög mezőbe.</p>
<p><code v-pre>F)</code> A kép elfordul, így lehetővé válik az elforgatás hatásának előnézetét mielőtt alkalmazza azt.</p>
</li>
<li>
<p>Kattintson a Forgatás gombra. <br>
Az Elforgatás párbeszédpanel bezárul.</p>
<p><code v-pre>G)</code> A kép úgy forog el, ahogyan ahogyan megadtad.</p>
<p>Most már tovább módosíthatja a képet, szükség szerint; mentse el; és zárja be.</p>
</li>
</ol>
<p><img src="@source/demo/images/4-fejezet/75.1.oldal.png" alt="" loading="lazy">
<img src="@source/demo/images/4-fejezet/75.2.oldal.png" alt="" loading="lazy"></p>
<div class="hint-container tip">
<p class="hint-container-title">TIP</p>
<p><strong>Hogyan használhatom az Elforgatás párbeszédpanelen az X-középpont mezőt és az Y-középpont mezőt?</strong></p>
<p>Alapértelmezetten a GIMP a képet a középpontja körül forgatja el, ami jellemzően a kívánt érték. Ha a képet egy másik pont körül szeretné elforgatni, jelölje meg a pontot a célkereszt vagy a Center X és Center Y mezőben lévő értékek kézi beállításával. A Center X érték vezérli a vízszintes pozíciót, a Center Y érték pedig a függőleges pozíciót szabályozza. A Reset gombra kattintva visszaállíthatja a forgatás és a szálkereszt pozíciójának visszaállítását. Kattintson a Rotate gombra, amikor készen áll az elforgatás végrehajtására.</p>
</div>
<h2 id="kep-kivagasa" tabindex="-1"><a class="header-anchor" href="#kep-kivagasa"><span>Kép kivágása</span></a></h2>
<p>Hacsak nem hihetetlen pontossággal komponálja meg fotóit, valószínűleg le kell vágnia őket hogy pontosan azt mutatják, amit akarsz, idegen tartalom nélkül. A GIMP lehetővé teszi a vágást képeket könnyedén. Sok kép esetén szabadon kell vágnia a kívánt pontos méretre. Mások esetében érdemes lehet egy adott képarányra levágni, például 3:2-re – minden két egységnyi magassághoz három egység széles.</p>
<ol>
<li>
<p>Nyissa meg a kívánt képfájlt amit akkar vágni.</p>
</li>
<li>
<p>Ha szükséges, nagyítsa ki vagy kicsinyítse a képet, hogy láthassa többet láthat, mint az a terület, amelyre szeretne levágni a képet. <br>
Használhatja a Zoom felugró menü vagy a Nagyítás folytatás menüt a Nézet menüből.</p>
</li>
<li>
<p>Kattintson a Crop Tool ( ) eszközre. <br>
A Crop Tool eszköz aktívvá válik.</p>
<p>Megjelenik a vágási mutató ( ).</p>
</li>
<li>
<p>Húzza átlósan a kijelöléshez a területet, amelyet meg szeretne tartani.</p>
</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Átlósan húzva bármelyik irányba.</p>
</div>
<p>Egy keret jelenik meg a terület körül amelyet kiválasztott.</p>
<p><img src="@source/demo/images/4-fejezet/76.1.oldal.png" alt="" loading="lazy">
<img src="@source/demo/images/4-fejezet/76.2.oldal.png" alt="" loading="lazy"></p>
<ol start="5">
<li>Ha szükséges, húzzon egy sarkot vagy oldalt a keretet vagy terület beállításához.</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>A kijelölési területet mozgathatja a belsejébe kattintva és annak húzássával.</p>
</div>
<ol start="6">
<li>Ha kijelölte a területet a kívánt területet, kattintson duplán a keretre a vágás végrehajtásához.</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Nyomja meg az Enter-t a vágás végrehajtását.</p>
</div>
<p><code v-pre>A)</code> Megjelenik a levágott kép.
Most módosíthatja a képet tovább, ha szükséges; mentse el; és
bezárhatja.</p>
<p><img src="@source/demo/images/4-fejezet/77.1.oldal.png" alt="" loading="lazy">
<img src="@source/demo/images/4-fejezet/77.2.oldal.png" alt="" loading="lazy"></p>
<div class="hint-container tip">
<p class="hint-container-title">TIPP</p>
<p><strong>Hogyan vághatok egy képet egy adott képarányra?</strong></p>
<p>Kattintson a Crop Tool gombra a Crop Tool eszköz aktiválásához. A GIMP ablak bal oldalán lévő Crop ablaktáblában alul az Eszköztár mellett, jelölje be az első, névtelen legördülő listától balra lévő jelölőnégyzetet. Kattintson a lista legördülő gombra, majd kattintson az Aspect ratio gombra. A legördülő lista alatti szövegdobozban válassza ki a meglévő képarányt, és írja be fölé a kívánt képarányt, például 3:2-t. A GIMP ezután a következőképpen korlátozza a vágási területet Kép kivágása</p>
</div>
<h2 id="kep-atmeretezese" tabindex="-1"><a class="header-anchor" href="#kep-atmeretezese"><span>Kép átméretezése</span></a></h2>
<p>Gimp lehetővé teszi, hogy átméretezz egy képet a számodra megfelelő méretre, legyen szó a kép szélességének és magasságának növeléséről vagy csökkentéséről. A felbontásból adódóan amivel a jelenlegi digitális kamerák és okostelefonok a fotókat készítik valószínűbb, hogy csökkentened kell a kép méretét amikor azzal dolgozol, de előfordulhat, hogy nagyítanod kell a kisebb grafikákon.</p>
<p>Egy kép átméretezése közben kiválaszthatod, hogy milyen interpolációt használj. Interpolációs vezérlők szabályozzák, hogy az alkalmazás hogyan számolja ki a színértékeket azokban a pixelekben, amelyeket egy kép átméretezésekor helyez be. Szükség esetén a kép felbontását is állíthatja.</p>
<ol>
<li>Nyisd meg a képet, amelyet szeretnél átméretezni.</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Jegyzet:</p>
<p>Általában az átméretezés előtt elfordítja, kiegyenesíti és levágja a képet szükség szerint.</p>
</div>
<p><code v-pre>A)</code> A kép felbontása a címsorban jelenik meg.
2. Kattints a képre. <br>
A kép menü megjelenik.</p>
<ol start="3">
<li>
<p>Kattints a Kép méretezése lehetőségre. <br>
A Kép méretezése ablak megnyílik.</p>
</li>
<li>
<p>Ha szeretnéd a magasságot és a szélességet külön állítani, kattints a kapcsolva-ra.</p>
</li>
<li>
<p>Ellenőrizd, hogy a px van kiválasztva a legördülő listában. Ha nem, akkor kattints a nyílra és válaszd ki a pixelt.</p>
</li>
<li>
<p>Kattints a szélességre és írd be a szélességet pixelben.</p>
</li>
<li>
<p>Ha külön válaszottad a szélességet és magasságot, kattints a Magasságra és írd be a magasságot pixelben.</p>
</li>
<li>
<p>Ha beállítod a felbontást, és külön szeretnéd beállítani a vízszintes és függőleges felbontást, kattints a „Kapcsolva” lehetőségre.</p>
</li>
</ol>
<p><img src="@source/demo/images/4-fejezet/78.1.oldal.png" alt="" loading="lazy">
<img src="@source/demo/images/4-fejezet/78.2.oldal.png" alt="" loading="lazy"></p>
<ol start="9">
<li>
<p>Erősítsd meg, hogy a pixel/mm jelenik meg a legördülő listában. Ha nem kattints a nyílra és válaszd ki a pixel/mm-et.</p>
</li>
<li>
<p>Kattints az X felbontásra és írd be a vízszintes felbontást.</p>
</li>
<li>
<p>Ha külön válaszottad a felbontást, kattints az Y felbontásra és írd be a függőleges felbontást.</p>
</li>
<li>
<p>Kattints az Interpolációra, és aztán kattints a majd kattints arra az interpolációs típusra, amelyet használni szeretnél: Nincs, Kocka, Lineáris, NoHalo vagy LoHalo. Lásd a tippet tanácsért.</p>
</li>
<li>
<p>Kattints a méretezésre. <br>
<code v-pre>A)</code> Kép méretezés ablak bezáródik.</p>
<p><code v-pre>B)</code> A GIMP átméretezi a képet a megadott paraméterekkel.</p>
<p><code v-pre>C)</code> A kép igazított felbontása megjelenik a címsorban.</p>
<p>Innentől szerkesztheted a képet tovább, ha kell; mentsd el; és zárd be.</p>
</li>
</ol>
<p><img src="@source/demo/images/4-fejezet/79.1.oldal.png" alt="" loading="lazy">
<img src="@source/demo/images/4-fejezet/79.2.oldal.png" alt="" loading="lazy"></p>
<div class="hint-container tip">
<p class="hint-container-title">Tipp</p>
<p><strong>Milyen fajta interpolációt használj egy kép újra méretezésénél?</strong></p>
<p>Amikor csökkented a kép méretét, válaszd a LoHalo lehetőséget az Interpoláció legördülő listájában; ha a LoHalo nem a várt eredményt hozza az adott kép esetében, próbáld ki helyette a NoHalo-t. Ha pedig növeled a kép méretét, válaszd a Kockás vagy Lineáris lehetőséget. A kockás interpoláció több feldolgozási teljesítményt igényel, mint a lineáris interpoláció, így tovább tarthat.</p>
</div>
<h2 id="szinek-szamanak-csokkentese" tabindex="-1"><a class="header-anchor" href="#szinek-szamanak-csokkentese"><span>Színek számának csökkentése</span></a></h2>
<p>Minél több szín található egy képen, annál nagyobb lesz a fájlmérete, ezért érdemes lehet csökkenteni a képek színeinek számát annak érdekében, hogy csökkentsük a fájlméretet. A GIMP Indexelt Színek Átalakítás funkció lehetővé teszi a színek számának csökkentését vagy egy megadott maximális számra, például 256 színre, vagy egy olyan palettára, amelyet optimalizáltak a weben való használatra. Általában a weben optimalizált paletta a legjobb választás a weboldalakban használt képekhez.</p>
<ol>
<li>
<p>Nyisd meg azt a képfájlt, amelyben csökkenteni szeretnéd a színek számát.</p>
</li>
<li>
<p>Kattints az Image (Kép) opcióra. <br>
Megnyílik az Image (Kép) menü.</p>
</li>
<li>
<p>Kattints a Mode (Mód) opcióra. <br>
Megjelenik a Mód folytatása menü.</p>
<p><code v-pre>A)</code> A pont (•) jelzi az aktuális színmódot — ebben az esetben az RGB-t.</p>
<p><code v-pre>B)</code> Kattinthatsz a Grayscale (Árnyalatos) opcióra, ha a kép színeit árnyalatos tónusokká szeretnéd konvertálni.</p>
</li>
<li>
<p>Kattints az Indexed (Indexelt) opcióra. <br>
Az Indexelt Színkonvertálás párbeszédpanel megnyílik.</p>
<p><code v-pre>C)</code> Ha egy meghatározott számú színre szeretnéd csökkenteni a képet, kattints a megfelelő paletta generálása (változik) opcióra. Ezután kattints a maximális szín száma lehetőségre, és add meg a számot.</p>
</li>
<li>
<p>Kattints a web-optimalizált paletta használata (változik) opcióra.</p>
</li>
<li>
<p>Válaszd ki a fel nem használt és duplikált színek eltávolítása a colormapból opciót.</p>
</li>
</ol>
<p><img src="@source/demo/images/4-fejezet/80.1.oldal.png" alt="" loading="lazy">
<img src="@source/demo/images/4-fejezet/80.2.oldal.png" alt="" loading="lazy"></p>
<ol start="7">
<li>Kattints a színátmenetes színezés ( ) opcióra, majd kattints a nincs opcióra.</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Az árnyékolás egy olyan technika, amelyet arra használnak, hogy korlátozott színpalettával szimuláljanak egy szélesebb színtartományt. Az árnyékolás kis pöttyöket helyez el különböző színekkel egymás közelében, hogy új színek illúzióját keltsék.</p>
</div>
<ol start="8">
<li>
<p>Kattints a konvertálás opcióra. <br>
Az Indexelt Színkonvertálás párbeszédpanel bezárul.</p>
<p>A GIMP végrehajtja a színkonverziót.</p>
<p>Most tovább módosíthatod a képet, amennyiben szükséges, mentheted, majd bezárhatod.</p>
</li>
</ol>
<p><img src="@source/demo/images/4-fejezet/81.1.oldal.png" alt="" loading="lazy">
<img src="@source/demo/images/4-fejezet/81.2.oldal.png" alt="" loading="lazy"></p>
<div class="hint-container tip">
<p class="hint-container-title">Tipp:</p>
<p><strong>Mi az RGB?</strong></p>
<p>Az RGB az angol „Red, Green, Blue” rövidítése, egy színmodell, amelyet színek reprezentálására használnak számítógépes képernyőkön és más digitális kijelzőkön. Az RGB színeket a vörös, zöld és kék fény változó intenzitásainak kombinálásával hozza létre. Az alkalmazott elsődleges színek mennyisége határozza meg az eredményes színt. Például, az egyenlő mennyiségű vörös, zöld és kék fény fehéret hoz létre, míg egyáltalán nincs fény feketét eredményez. Az RGB-ben az eredményes szín világosabb lesz, ahogy több szín kerül hozzáadásra. Minden színcsatorna az RGB-ben egy értéket képvisel a 0–255 tartományban, ahol a 0 a szín hiányát jelenti, míg a 255 a maximális intenzitást. A fekete az RGB(0,0,0); a fehér pedig az RGB(255,255,255) színkódú.</p>
</div>
</div></template>


