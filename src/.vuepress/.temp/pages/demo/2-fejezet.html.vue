<template><div><h2 id="tanulmanyozza-a-weboldal-anatomiajat" tabindex="-1"><a class="header-anchor" href="#tanulmanyozza-a-weboldal-anatomiajat"><span>Tanulmányozza a weboldal anatómiáját</span></a></h2>
<p>A HTML-ben minden weboldalnak ugyanaz az alapstruktúrája, függetlenül attól, hogy mennyire egyszerű vagy összetett a weboldal.</p>
<p>Egy HTML weboldal egy DOCTYPE definícióval kezdődik, amely meghatározza a dokumentum kódolási típusát. Ezután következik a használt nyelv meghatározása, például lang=&quot;en&quot; az angol nyelv megjelölésére. Ezután a weboldal egy fej- és egy testelemből áll. A head elem tartalmazza a dokumentumra vonatkozó információkat, például az oldal címét és a hivatkozások alap URL-címét. A body elem tartalmazza a weboldal többi tartalmát, például a címsorokat, a szöveget és a linkelt médiafájlokat.</p>
<h3 id="a-weboldal-negy-fo-elemenek-azonositasa" tabindex="-1"><a class="header-anchor" href="#a-weboldal-negy-fo-elemenek-azonositasa"><span>A weboldal négy fő elemének azonosítása</span></a></h3>
<p>Minden érvényes HTML-oldalnak négy kulcselemet kell tartalmaznia, amint azt a közeli kód szemlélteti:</p>
<ul>
<li>
<p>DOCTYPE nyilatkozat. Ez a nyilatkozat közli a böngészővel a HTML-oldal dokumentumtípusát. A böngészőnek szüksége van erre az információra ahhoz, hogy a dokumentum kódjait helyesen értelmezze.</p>
</li>
<li>
<p><code v-pre>&lt;html&gt;</code> címkék. A weblap egésze a nyitó <code v-pre>&lt;html&gt;</code> tag és a záró <code v-pre>&lt;/html&gt;</code> tag között jelenik meg. Ezek a címkék a kétrészes címkék szabványos formátumát mutatják: A záró tag egy előremenő perjelből, /, és a nyitó taggel megegyező szövegből áll. A <code v-pre>&lt;p&gt;</code> nyitó taggel például azt mondja a HTML-nek, hogy kezdjen el egy bekezdést, a <code v-pre>&lt;/p&gt;</code> záró taggel pedig befejezi a bekezdést.</p>
</li>
<li>
<p>head elem. Ez az elem tartalmazza a dokumentum metaadatait, beleértve a kódoláshoz használt karakterkészletet és a címet, amelyet a legtöbb webböngésző a címsorban jelenít meg.</p>
</li>
<li>
<p>body elem. Ez az elem tartalmazza a weboldal tartalmát, például a címsorok, bekezdések és listák szövegét, valamint a külső tartalomra, például képekre mutató hivatkozásokat.</p>
</li>
</ul>
<h3 id="a-doctype-deklaracio-megertese" tabindex="-1"><a class="header-anchor" href="#a-doctype-deklaracio-megertese"><span>A DOCTYPE deklaráció megértése</span></a></h3>
<p>Minden HTML-oldal a dokumentumtípus deklarációjával kezdődik a DOCTYPE kulcsszóval. A HTML5 dokumentum DOCTYPE deklarációja egyszerű és rövid:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Tekintettel arra, hogy a HTML5 már 15 éve használatban van, valószínűleg ezzel a DOCTYPE deklarációval fogsz leggyakrabban találkozni. Ha azonban régebbi weboldalakkal dolgozik, valószínűleg más DOCTYPE-deklarációkkal is találkozik, ezért hasznos, ha felismeri őket.</p>
<p>A HTML 4-es verziója és az Extensible Hypertext Markup Language (XHTML) összetettebb DOCTYPE deklarációkat használ, amelyek tartalmazzák az oldal által használt dokumentumtípus-definíció (DTD) részleteit. A HTML 4 Strict szabvány például a következő DOCTYPE deklarációt használja:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">HTML</span> <span class="token name">PUBLIC</span> <span class="token string">"-//W3C//DTD HTML 4.01//EN"</span> <span class="token string">"http://www.w3.org/TR/html4/strict.dtd"</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Hasonlóképpen, az XHTML 1.1 szabvány a következő DOCTYPE deklarációt használja:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span> <span class="token name">PUBLIC</span> <span class="token string">"-//W3C//DTD XHTML 1.1//EN"</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>&quot;http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd&quot;&gt;
Az XHTML doctype nyitó <code v-pre>&lt;html&gt;</code> tagje tartalmazza az xmlns attribútumot, amely a dokumentum által használt XHTML névtér adatait adja meg:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/1999/xhtml<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A névtér az elemek egy adott osztálya, amelyben minden elemnek egyedi neve van. Az XHTML például más névteret használ, mint a HTML 4, de a külön névterekben egyes nevek azonosak.</p>
<h3 id="a-html-ervenyesseg-es-ervenyesites-megertese" tabindex="-1"><a class="header-anchor" href="#a-html-ervenyesseg-es-ervenyesites-megertese"><span>A HTML érvényesség és érvényesítés megértése</span></a></h3>
<p>Egy HTML-dokumentumnak érvényesnek kell lennie ahhoz, hogy megfelelően és következetesen jelenjen meg.</p>
<h2 id="a-visual-studio-kodjanak-megmondasa-hogy-melyik-mappat-hasznalja" tabindex="-1"><a class="header-anchor" href="#a-visual-studio-kodjanak-megmondasa-hogy-melyik-mappat-hasznalja"><span>A Visual Studio kódjának megmondása, hogy melyik mappát használja</span></a></h2>
<p>A HTML-fájlok létrehozása előtt mondja meg a Visual Studio Code-nak, hogy melyik mappában tárolja őket. Ez lehet Befter en tinting mappa vagy fider, amelyet most hoz létre a Visual Studio Code-on belül. Miután a mappa azonosítása után utasítja a Visual Studio Code-ot, hogy bízzon a mappa szülőmappájában - a mappát tartalmazó mappában.</p>
<p>A Visual Studio Code elsődleges oldalsávja tartalmaz egy Intéző ablaktáblát, amely lehetővé teszi a mappák és fájlok létrehozását, kezelését és megnyitását. A Visual Studio Code Intéző ablaktáblájában való munkavégzés egyszerűbb és gyorsabb, mint a File Explorer ablakban való munka.</p>
<h3 id="hozzon-letre-egy-mappat-a-webhelyehez" tabindex="-1"><a class="header-anchor" href="#hozzon-letre-egy-mappat-a-webhelyehez"><span>Hozzon létre egy mappát a webhelyéhez</span></a></h3>
<ol>
<li>
<p>A Windows Visual Studio Code programjában kattintson a Menü (=), majd a Fájl elemre. <br>
MacOS és Linux rendszeren kattintson a Fájl lehetőségre.
Megnyílik a Fájl menü.</p>
</li>
<li>
<p>Kattintson a Mappa megnyitása lehetőségre. <br>
Megjelenik a Mappa megnyitása párbeszédpanel.</p>
</li>
<li>
<p>Keresse meg azt a mappát, amelyben tárolni szeretné a webhelyét tartalmazó mappát.</p>
</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Ha egy meglévő mappát szeretne használni, navigáljon arra a mappára, és válassza ki. Folytassa a 6. lépéssel.</p>
</div>
<ol start="4">
<li>
<p>Kattintson az Új mappa elemre. <br>
A Visual Studio Code létrehoz egy új mappát a mappában, megadja az alapértelmezett nevet Új mappa, és kiválasztja a nevet.</p>
</li>
<li>
<p>Írja be a mappa nevét, majd az alkalmazáshoz nyomja meg az Enter billentyűt.</p>
</li>
<li>
<p>Kattintson a Mappa kiválasztása elemre. <br>
A Mappa megnyitása párbeszédpanel bezárul.</p>
<p>Megnyílik a Do You Trust the Authors of the Files in This Folder? párbeszédpanel. A Ha meg akarja bízni az ezt a mappát tartalmazó mappát, válassza a Megbízhat a szülőmappa összes fájljának szerzőiben jelölőnégyzetet.</p>
</li>
</ol>
<figure><img src="@source/demo/images/2-fejezet/30.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="7">
<li>Kattintson az Igen, megbízom a szerzőkben gombra.</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Ha nem bízik a fájlok szerzőiben, kattintson a Nem, nem bízom a szerzőkben lehetőségre.</p>
</div>
<p>A Do You Trust the Authors of the Files in This Folder? párbeszédpanel bezárul. A Visual Studio Code megnyitja az elsődleges oldalsávot az Explorer ablaktábla megjelenítésével.</p>
<p><code v-pre>B)</code> Megjelenik a kiválasztott mappa.</p>
<p><code v-pre>C)</code> Az Összecsukás (~) gombra kattintva összecsukhatja az Intéző ablaktábla egy részét.</p>
<!-- `D)` You can click Collapse ( ) to collapse a section of the Explorer panel.  -->
<p><code v-pre>E)</code> Az Explorer ablaktábla egy szakaszának kibontásához kattintson a Bővítés (&gt;) gombra.</p>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Az Explorer sáv mappaszakasza fölé mozgatva a mutatót megjelenítheti az Új fájl gombot és az Új mappa gombot.</p>
</div>
<p><code v-pre>F)</code> Az Új fájl (+) gombra kattintva új fájlt hozhat létre a mappában.</p>
<p><code v-pre>G)</code> Az Új mappa (E) gombra kattintva új mappát hozhat létre a mappában.</p>
<figure><img src="@source/demo/images/2-fejezet/31.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">TIPP:</p>
<p><strong>Hogyan akadályozhatom meg, hogy a mappa neve megjelenjen a Visual Studio Code címsorának keresőmezőjében?</strong></p>
<p>Miután megnyitott egy mappát, annak neve megjelenik a Visual Studio Code alkalmazás címsorában található Keresés mezőben. A név eltávolításához zárja be a mappát a Fájl - Windowson kattintson a Menü (=), majd a Fájl - gombra, majd a menüben kattintson a Mappa bezárása gombra.</p>
</div>
<h2 id="az-elso-weboldalad-letrehozasa" tabindex="-1"><a class="header-anchor" href="#az-elso-weboldalad-letrehozasa"><span>Az első weboldalad létrehozása</span></a></h2>
<p>Miután beállítottad a Visual Studio Code-ot úgy, hogy a weboldal mappáját használja, létrehozhatod az első weboldaladat.  Ebben a szakaszban elkezded az oldalt, hozzáadsz egy címet a lap fejlécéhez, és beszúrsz néhány helykitöltő szöveget az oldal törzsébe.  Ha beállítottad az AutoSave funkciót a Beállításokban, a Visual Studio Code automatikusan menti a munkádat.  Ha nem, akkor használd a Control + S kombinációt a Windows vagy Linux rendszeren, vagy a Command + S kombinációt a Mac rendszeren, amikor menteni szeretnéd a fájlokat.</p>
<p>Teljesítsd ezt a szakaszt a következő többi szakasz előtt, amelyekben megtekinted az oldalt, majd hozzáadsz címeket, szöveget és más elemeket.</p>
<h3 id="keszitsd-el-az-elso-weboldaladat" tabindex="-1"><a class="header-anchor" href="#keszitsd-el-az-elso-weboldaladat"><span>Készítsd el az első weboldaladat:</span></a></h3>
<ol>
<li>A Visual Studio Code-ban kattints az Explorerre. Megnyílik a főoldalsáv, amely megjeleníti az Explorer ablakot.</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Ha a Visual Studio Code nem bővíti ki automatikusan az Explorer ablak mappa részét, kattints a Kibővítés ( &gt; ) gombra, hogy kibővítsd.</p>
</div>
<ol start="2">
<li>
<p>Kattints az Új fájlra. Egy szerkesztőmező megjelenik.</p>
</li>
<li>
<p>Írd be a fájlnevet, beleértve a .html fájlkiterjesztést, majd nyomd le az Enter-t. A példa a keyboardsl.html fájlnevet használja. <br>
A Visual Studio Code létrehozza a fájlt, és megjeleníti a főablakban. A beillesztés pont megjelenik a fájl első sorában, amelyet 1-es számmal jelölnek.</p>
</li>
<li>
<p>Írd be: <br>
Az AutoComplete lista megnyílik, és az elérhető AutoComplete bejegyzéseket mutatja, amelyek a karakterrel ! kezdődnek.</p>
</li>
<li>
<p>Kattints az első elemre, amelyet Emmet rövidítésként azonosítanak. <br>
<code v-pre>A)</code> A <code v-pre>&lt;!DOCTYPE html&gt;</code> deklaráció határozza meg, hogy a dokumentum HTML5.</p>
<p><code v-pre>B)</code> A nyitó <code v-pre>&lt;html&gt;</code> tag a lang=&quot;en&quot; attribútumot tartalmazza, ami az angol nyelvet állítja be.</p>
<p><code v-pre>C)</code> Az nyitó <code v-pre>&lt;head&gt;</code> és záró <code v-pre>&lt;/head&gt;</code> tag határolja a head szekcióját, amely meta információkat és az oldal címét tartalmazza.</p>
<p><code v-pre>D)</code> A nyitó <code v-pre>&lt;body&gt;</code> és záró <code v-pre>&lt;/body&gt;</code> tag határolja a body szekcióját, amely üres.</p>
<p><code v-pre>E)</code> A záró <code v-pre>&lt;/html&gt;</code> tag zárja le a weboldalt.</p>
</li>
</ol>
<figure><img src="@source/demo/images/2-fejezet/32.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Az Emmet rövidítést kibővítheted a Tab gombbal, amikor a rövidítés kiemelve van.</p>
</div>
<ol start="6">
<li>
<p>Kattints duplán a Dokumentumra a 7. sorban. A Visual Studio Code kijelöli a szót.</p>
</li>
<li>
<p>Írd be azt a címet, amit adni szeretnél a weboldalnak. Megjegyzés: A weboldal címe megjelenik a böngésző cím sávjában. Ha a weboldal egy böngésző fülön van, a cím ott jelenik meg.</p>
</li>
<li>
<p>Kattints a 10. sorba, és írd be a <code v-pre>&lt;p&gt;</code> nyitó taget, valamint a szöveget, amit választasz, majd a záró <code v-pre>&lt;/p&gt;</code> taget — például:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Do you use a keyboard with your computer?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<p><code v-pre>F)</code> Kattinthatsz az Explorer () ikonra, hogy bezárd az elsődleges oldalsávot, így több helyet biztosítva magadnak a weboldal szerkesztéséhez.</p>
<figure><img src="@source/demo/images/2-fejezet/33.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">Tipp</p>
<p><strong>Mi az a kis, olvashatatlan szövegdoboz a Visual Studio Code ablakának jobb oldalán?</strong></p>
<p>Ez a doboz a Minimap-et tartalmazza, egy vizuális funkciót a kódod gyors navigálásához. A Minimap lényegében egy kis méretű nézetet nyújt a kódból a fő ablakban. Mozgasd az egérmutatót a Minimap felett, hogy megjelenítse a szürke kiemelést, ami egy képernyőnyi kódot mutat neked, görgess fel és le a kódban, hogy megtaláld azt a részt, amit meg szeretnél nézni, majd kattints arra a részre a fő ablakban. Ha nem találod hasznosnak a Minimap-et, kattints a Menüsávban a “Nézet” opcióra, majd válaszd ki a “Minimap kikapcsolása” lehetőséget.</p>
</div>
<h2 id="nyisd-meg-az-internetes-oldalt-egy-bongeszoben" tabindex="-1"><a class="header-anchor" href="#nyisd-meg-az-internetes-oldalt-egy-bongeszoben"><span>Nyisd meg az internetes oldalt egy böngészőben.</span></a></h2>
<p>A Visual Studio Code nem rendelkezik beépített böngészővel weboldalak megtekintésére, azonban gyorsan megnyithatsz egy weboldalt böngészőben annak megtekintéséhez. Az oldal megjelenítése segít abban, hogy könnyen láthasd az HTML kódban végzett változtatások eredményeit. Bármelyik böngészőt használhatod, amit előnyben részesítesz; ebben a példában a Google Chrome-ot fogjuk használni.</p>
<p>Ez a rész feltételezi, hogy létrehoztál egy weboldalt a Visual Studio Code-ban, amint azt az előző részben, a &quot;Hozz létre az első weboldalad&quot; című részben elmagyarázták.</p>
<h3 id="nyisd-meg-az-internetes-oldalt-egy-bongeszoben-1" tabindex="-1"><a class="header-anchor" href="#nyisd-meg-az-internetes-oldalt-egy-bongeszoben-1"><span>Nyisd meg az internetes oldalt egy böngészőben.</span></a></h3>
<ol>
<li>
<p>A Visual Studio Code-ban nyisd meg a weboldaladat, majd kattints jobb gombbal a weboldal fülére. <br>
Megnyílik a helyzeti menü.</p>
</li>
<li>
<p>Kattints a &quot;Megnyitás a fájlkezelőben&quot; lehetőségre. <br>
Egy Fájlkezelő ablak nyílik meg a weboldal mappájában.</p>
</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Ha megjelenik az elsődleges oldalsáv és látható az Explorer panel, akkor jobb gombbal kattinthatsz a weboldal fájljára, majd válaszd ki a &quot;Megnyitás a fájlkezelőben&quot; lehetőséget a helyzeti menüből.</p>
</div>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Ha a weboldalt meg akarod nyitni az alapértelmezett böngésződben, egyszerűen duplán kattints a fájlra.</p>
</div>
<ol start="3">
<li>Jobb gombbal kattints a weboldal fájljára, válaszd ki vagy emeld ki a &quot;Megnyitás ezzel&quot; lehetőséget a helyzeti menüből, majd kattints az alkalmas böngészőre - például a Google Chrome-ra.</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Ha a számítógépeden nagy képernyő van, akkor a Visual Studio Code ablakát és a böngésző ablakát megosztva használni segíthet hatékonyabban dolgozni. Ha két monitorod van, érdemes lehet a Visual Studio Code-ot az egyik monitorra, a böngészőt pedig a másikra helyezni.</p>
</div>
<figure><img src="@source/demo/images/2-fejezet/34.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>Megnyílik egy böngészőablak vagy lap, amely a weboldalt mutatja. Most már elrendezheti a böngésző ablakot és a Visual Studio Code ablakát úgy, hogy mindkettőt láthassa. A következő lépések egy egyszerű módszert mutatnak be a Windows Snap funkció használatával.
4. Kattintson a böngészőablak címsorára, és húzza balra vagy jobbra, amíg a mutató el nem éri az ablak szélét. <br>
<code v-pre>A)</code> A Windows Snap átméretezi és elhelyezi az ablakot, hogy illeszkedjen a képernyő feléhez.</p>
<pre><code>`B)` A Windows Snap egy bélyegképet jelenít meg egymás megnyitott ablakaihoz, amelyeket a képernyő másik felére helyezhet el.
</code></pre>
<ol start="5">
<li>
<p>Kattintson a Visual Studio Code ablakára <br>
<code v-pre>C)</code> A Windows Snap az ablakot a képernyő másik felére helyezi.</p>
<p>Most már módosíthatja a Visual Studio Code ablakát.</p>
<p><code v-pre>D)</code> Kattintson a Frissítés lehetőségre (például a Google Chrome-ban) a weboldal frissítéséhez, hogy megjelenjen a legutóbbi módosítások.</p>
</li>
</ol>
<figure><img src="@source/demo/images/2-fejezet/35.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">Tipp</p>
<p><strong>Melyik böngésző a legjobb az oldalak megtekintéséhez munka közben?</strong></p>
<p>A főbb böngészők bármelyike – Google Chrome, Microsoft Edge, Mozilla, Firefox, Apple Safari – bármelyik ezek közül jól fog működni. Az oldalak következetes működésének biztosítása érdekében váltogassa a különböző böngészőket az oldalak megtekintéséhez. <br>
A böngészők közötti váltás legegyszerűbb módja, ha a jobb gombbal a fájlra kattint a Fájlkezelő ablakban, kattintson vagy jelölje ki a Megnyitás elemet, majd kattintson a használni kívánt böngészőre.</p>
</div>
<h2 id="add-headings-and-text" tabindex="-1"><a class="header-anchor" href="#add-headings-and-text"><span>Add Headings and Text</span></a></h2>
<p>Jelenleg a weboldalaknak előnyös egy olyan struktúrával rendelkezniük, amely különböző szintű címeket használ. Az HTML hat különböző címszintet biztosít, ahol az h1 a legmagasabb szintű cím, az h6 pedig a legalacsonyabb szintű. Általában két vagy három címszint elegendő. Ebben a szakaszban három szintű címszintet adunk hozzá a weboldaladhoz, a címeket egyszerű szövegrészletekkel választjuk el.</p>
<p>A képernyők ebben a részben megmutatják a Visual Studio Code ablakot és a Google Chrome böngészőablakot, amelyeket függőlegesen csempézünk el a Windows Snap segítségével. Követheted ezt a elrendezést, vagy rendezheted az ablakokat úgy, ahogy neked a legjobban megfelel.</p>
<ol>
<li>
<p>A Visual Studio Code-ban, amikor a weboldalad meg van nyitva, válaszd ki az egész 10. sort, az egyik bekezdést a test elemen belül.</p>
</li>
<li>
<p>Írd be a h1-et, hogy elkezdj egy nyitó <code v-pre>&lt;h1&gt;</code> címke létrehozását egy Emmet rövidítéssel: h1 A felugró menü megnyílik, az alapértelmezett módon a h1 Emmet rövidítési elem van kiválasztva.</p>
</li>
<li>
<p>Kattints a h1-re, vagy egyszerűen nyomj . A Visual Studio Code kibontja a rövidítést a teljes címkévé, a nyitó <code v-pre>&lt;h1&gt;</code> címkévé és a <code v-pre>&lt;/h1&gt;</code> címkévé, az elhelyezési pontot közéjük helyezi.</p>
</li>
<li>
<p>Írd be a legfelső szintű címke szövegét.</p>
</li>
<li>
<p>Kattints a záró <code v-pre>&lt;/h1&gt;</code> címke után, majd nyomd meg az Entert új sor létrehozásához.</p>
</li>
<li>
<p>Írd be a p-t, hogy elkezdj egy nyitó <code v-pre>&lt;p&gt;</code> címkét egy Emmet rövidítéssel. A felugró menü megnyílik, az alapértelmezett módon a p Emmet rövidítési elem van kiválasztva.</p>
</li>
<li>
<p>Kattints a p-re vagy nyomj . A Visual Studio Code kibontja a rövidítést a teljes címkévé.</p>
</li>
<li>
<p>Írj egy bekezdést a test szövegéhez.</p>
</li>
<li>
<p>Kattints az Újratöltésre ( ). Címek és szövegek hozzáadása A legtöbb weboldalnak hasznos struktúrája van, amely különböző címszinteket használ. Az HTML hat különböző címszintet biztosít, ahol az h1 a legmagasabb szintű cím, az h6 pedig a legalacsonyabb szintű. Általában két vagy három címszint elegendő. Ebben a részben hozzáadunk három címszintet a weboldaladhoz, és szövegrészleteket helyezünk el köztük. A képernyők ebben a részben megmutatják a Visual Studio Code ablakot és a Google Chrome böngészőablakot, amelyeket függőlegesen csempézünk el a Windows Snap segítségével. Követheted ezt a elrendezést, vagy rendezheted az ablakokat úgy, ahogy neked a legjobban megfelel.</p>
</li>
</ol>
<figure><img src="@source/demo/images/2-fejezet/36.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>Első weboldalak létrehozása A Google Chrome megjeleníti a weboldalon történt változásokat. A Az első szintű cím jól kirajzolódik.
10. Kattints a 12. sor elejére.</p>
<ol start="11">
<li>
<p>Írj be szöveget, amely tartalmaz második szintű címeket, az <code v-pre>&lt;h2&gt;</code> és <code v-pre>&lt;/h2&gt;</code> címkék közé, valamint bekezdéseket, az <code v-pre>&lt;p&gt;</code> és <code v-pre>&lt;/p&gt;</code> címkék közé — például:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Lehet-e cserélni a billentyűzetet egy laptopon?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Nem, de csatlakoztathatsz egy külső billentyűzetet.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Mik az előnyök és hátrányok egy külső billentyűzettel?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Egy laptop használata egy külső billentyűzettel előnyökkel és hátrányokkal jár.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Kattints az Újratöltésre ( ) a böngésző frissítéséhez.</p>
</li>
<li>
<p>Folytasd az oldalt úgy, hogy beírsz szöveget, amely tartalmaz harmadik szintű címeket, az <code v-pre>&lt;h3&gt;</code> és <code v-pre>&lt;/h3&gt;</code> címkék közé, és további bekezdéseket — például:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>Külső billentyűzet előnyei<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Íme néhány jó dolog egy külső billentyűzet használatáról.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>Külső billentyűzet hátrányai<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Íme néhány rossz dolog egy külső billentyűzet használatáról.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Kattints az Újratöltésre ( ) a böngésző frissítéséhez.
<code v-pre>B)</code> Jól láthatóak a három szintű címek.</p>
</li>
</ol>
<figure><img src="@source/demo/images/2-fejezet/37.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">TIPP</p>
<p><strong>Hogyan lehet szöveget kiválasztani a Visual Studio Code-ban?</strong></p>
<p>A Visual Studio Code lehetővé teszi számodra a legtöbb szokásos kiválasztási módszer használatát. Például tartsd lenyomva az Alt és nyomj fel/le/jobbra/balra, hogy kiválaszd a szöveget a billentyűzettel. Kattinthatsz és húzhatod az egérrel; vagy kattinthatsz oda, ahonnan a kiválasztást kezdenéd, majd nyomd meg az Alt+Kattintás-t ahhoz, hogy befejezd. A szó kiválasztásához duplán kattinthatsz, vagy a bekezdés teljes kijelöléséhez háromszorosan.</p>
</div>
<h2 id="nest-one-element-within-another-element" tabindex="-1"><a class="header-anchor" href="#nest-one-element-within-another-element"><span>Nest One Element Within Another Element</span></a></h2>
<p>Ahogyan ebben a könyvben már láttad, az HTML lehetővé teszi egy elem elhelyezését egy másik elemen belül. Például, a weboldal teljes tartalmát tartalmazza az html elemen belül: Az html elemen belül található a head elem és a body elem, melyek mindegyike más elemeket tartalmaz.</p>
<p>Egy elem elhelyezése egy másik elemen belül azt jelenti, hogy egy elemet befoglalunk egy másik elembe. Amikor egy elemet befoglalsz egy másik elembe, fontos, hogy zárd le a befoglalt elemet, mielőtt lezáródna az elem, amelybe befoglaltad.</p>
<h3 id="grasp-how-nesting-works" tabindex="-1"><a class="header-anchor" href="#grasp-how-nesting-works"><span>Grasp How Nesting Works</span></a></h3>
<p>Egy elem befoglalása egy másik elemen belül Értsd meg, hogyan működik a befoglalás Ahhoz, hogy egy elemet befoglalj egy másik elemen belül, először írd be a tartalmazó elem nyitó és záró címkéjét. Például, egy weboldal body eleme használja az nyitó <code v-pre>&lt;body&gt;</code> címkét és a záró <code v-pre>&lt;/body&gt;</code> címkét:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Ezután beágyazhatsz egy elemet a nyitó és záró címkék közé. Például, beágyazhatsz egy bekezdést, ahogyan itt láthatod.</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Itt egy bekezdés.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ha sok elemet fogsz beágyazni, valószínűleg külön sorokra akarod helyezni a külső elem címkéit, hogy könnyen látható legyen, hogy hol kezdődik és végződik az elem. A beágyazott elemek behúzása segít vizuálisan megkülönböztetni őket anélkül, hogy megváltoztatnád az HTML szemantikáját, mivel a böngészők figyelmen kívül hagyják a behúzást.
Például:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Itt egy első szintű cím<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Itt egy bekezdés.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Az elemek beágyazásának kulcsa az, hogy egy beágyazott elemet be kell zárnod, mielőtt bezárnád az elemet, amelybe beágyaztad. Ha a beágyazott elemet zárod le az elem bezárása előtt, hibák jelentkeznek, és az HTML nem lesz érvényes. A következő példa bezárja a body elemet a bekezdés bezárása előtt:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Itt egy első szintű cím<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Itt egy bekezdés.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ez a példa hibát okoz, mint például Láttam egy végtagot, miután a body bezáródott.</p>
<h2 id="megjegyzesek-hozzaadasa" tabindex="-1"><a class="header-anchor" href="#megjegyzesek-hozzaadasa"><span>Megjegyzések hozzáadása</span></a></h2>
<p>Az HTML lehetővé teszi a megjegyzések felvételét. Egy megjegyzés olyan szöveg, amely megjelenik az HTML forráskódjában, de amelyet a böngésző nem jelenít meg a weboldalon. A megjegyzések hozzáadása hasznos lehet, mind emlékeztetőként a weboldal létrehozása során, mind akkor, amikor dokumentálni akarod azt másoknak vagy saját magadnak. A megjegyzéseket használhatod meglévő elemek elrejtésére egy weboldalon, megakadályozva azok megjelenítését — például ha valami nem működik. Ez általában ideiglenes megoldás. Általában eltávolítod a megjegyzéseket, mielőtt a weboldalt elérhetővé tennéd az interneten.</p>
<ol>
<li>
<p>Nyisd meg a weboldalad a Visual Studio Code-ban és a böngésződben.</p>
</li>
<li>
<p>Kattints oda, ahová be akarod szúrni a megjegyzést.</p>
</li>
<li>
<p>Írd be a <strong>&lt;!--</strong> kezdeti megjegyzési címkét.</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code>&lt;!--
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>A)</code> Visual Studio Code automatikusan beilleszti --&gt; a címkét, hogy befejezze azt:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- --></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Írd be a megjegyzés szövegét — például: \</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- Itt egy megjegyzés. --></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>B)</code> A megjegyzés más színben jelenik meg a Visual Studio Code-ban.</p>
</li>
<li>
<p>Kattints az Újratöltésre ( ). A megjegyzés nem jelenik meg a böngészőben.</p>
</li>
<li>
<p>Kattints azzal a célra, hogy megelőzd az első elemet, amelyet el akarsz rejtetni.</p>
</li>
<li>
<p>Írd be a <strong>&lt;!--</strong> kezdeti megjegyzési címkét.</p>
</li>
<li>
<p>Kattints az utolsó elem végére, amelyet el akarsz rejtetni.</p>
</li>
<li>
<p>Írd be a <strong>--&gt;</strong> záró megjegyzési címkét.</p>
</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Egy megjegyzés több soron is elterjedhet.</p>
</div>
<ol start="10">
<li>Kattints az Újratöltésre ( ). <br>
<code v-pre>C)</code> A megjegyzéssel bezárt elemek már nem jelennek meg.</li>
</ol>
<figure><img src="@source/demo/images/2-fejezet/39.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="kozvetlen-formazas-alkalmazasa" tabindex="-1"><a class="header-anchor" href="#kozvetlen-formazas-alkalmazasa"><span>Közvetlen formázás alkalmazása</span></a></h2>
<p>A legegyszerűbb módja a weboldal megjelenésének megváltoztatásának a közvetlen formázás, vagyis a formázási elemek alkalmazása a szövegre vagy egy objektumra. Például kiemelheted a szöveg különböző részeit, például félkövéren, dőlten vagy aláhúzással, a megfelelő címkék elhelyezésével körülöttük.</p>
<p>A közvetlen formázás könnyen és hatékonyan működik, de nem hatékony. A formázás CSS segítségével sokkal hatékonyabb és könnyebb frissíteni. Azonban érdemes megismerni és megérteni a közvetlen formázást, mert valószínűleg sok weboldalon találkozni fogsz vele.</p>
<h3 id="kozvetlen-formazas-alkalmazasa-1" tabindex="-1"><a class="header-anchor" href="#kozvetlen-formazas-alkalmazasa-1"><span>Közvetlen formázás alkalmazása:</span></a></h3>
<ol>
<li>
<p>Nyisd meg a weboldaladat a Visual Studio Code-ban és a böngésződben.</p>
</li>
<li>
<p>Kattints a szó elé, amelyre félkövéren szeretnéd alkalmazni a formázást.</p>
</li>
<li>
<p>Írd be a nyitó <code v-pre>&lt;b&gt;</code> tag-ot:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Kattints a szó után, majd írd be a záró <code v-pre>&lt;/b&gt;</code> tag-ot, így a címkék be fogják zárni a szót, így:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">></span></span>keyboard<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Frissítsd az oldalt (Ctrl + R). <br>
<code v-pre>A)</code> A szó félkövérben jelenik meg a böngészőben.</p>
</li>
<li>
<p>Kattints a szöveg elé, amelyre dőlt és aláhúzott formázást szeretnél alkalmazni.</p>
</li>
<li>
<p>Írd be a nyitó <code v-pre>&lt;i&gt;</code> tag-ot és a nyitó <code v-pre>&lt;u&gt;</code> tag-ot:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>u</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Kattints a szöveg után, majd írd be a záró <code v-pre>&lt;/u&gt;</code> tag-ot és a záró <code v-pre>&lt;/i&gt;</code> tag-ot.</p>
</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Zárd le a beágyazott <code v-pre>&lt;u&gt;</code> tag-ot a tartalmazó <code v-pre>&lt;i&gt;</code> tag-ot zárásakor.</p>
</div>
<ol start="9">
<li>Frissítsd az oldalt (Ctrl + R). <br>
<code v-pre>B)</code> A szöveg dőlt és aláhúzott formázásban jelenik meg a böngészőben.</li>
</ol>
<figure><img src="@source/demo/images/2-fejezet/40.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="az-oldal-forraskodjanak-megtekintese" tabindex="-1"><a class="header-anchor" href="#az-oldal-forraskodjanak-megtekintese"><span>Az oldal forráskódjának megtekintése</span></a></h2>
<p>Általában, amikor egy weboldalt megnyitsz egy böngészőben, az alkalmazás megjeleníti az HTML eredményeit, például egy fényes, grafikus weboldalt. De néha előfordulhat, hogy inkább szeretnéd megtekinteni az oldal forráskódját. Az oldal forráskódjának megtekintése segíthet megérteni, hogyan van megvalósítva egy adott elem HTML-ben, vagy lehetővé teheti számodra egy olyan probléma azonosítását, amely megakadályozza az oldal helyes megjelenítését.</p>
<p>A technikák az oldal forráskódjának megtekintésére eltérhetnek böngészőnkként. Ez a rész mutatja meg neked, hogyan nézheted meg az oldal forráskódját a Google Chrome, Firefox, Microsoft Edge és Safari böngészőkben.</p>
<h3 id="egy-oldal-forraskodjanak-megjelenitese-bongeszoben" tabindex="-1"><a class="header-anchor" href="#egy-oldal-forraskodjanak-megjelenitese-bongeszoben"><span>Egy oldal forráskódjának megjelenítése böngészőben</span></a></h3>
<p>A Google Chrome, a Mozilla Firefox és a Microsoft Edge böngészőkben egy oldal forráskódját megjelenítheted úgy, hogy jobb klikkelsz az oldalon, majd kiválasztod a Megjelenítés Forráskódban lehetőséget a felugró menüből.</p>
<p>MacOS-en a Safari nehezebbé teszi ezt a folyamatot. Először is, hozzá kell adnod a Fejlesztés menüt a menüsorhoz. Ehhez kattints a Safari-re, majd a Beállításokra, hogy megnyisd a Safari beállítások ablakát; kattints az Advanced (Haladó) fülre, hogy megjelenítsd a Haladó beállításokat; és válaszd ki a Fejlesztői menü megjelenítése a menüsorban lehetőséget (). Ezután kattints a Fejlesztők-re a menüsorban, majd válaszd a Forráskód megjelenítése lehetőséget; vagy használhatod a Control + klikk-et vagy jobbklikket az oldalon, majd válaszd ki a Forráskód megjelenítése lehetőséget a felugró menüből.</p>
<p>Egy összetett oldal forráskódja első ránézésre nyomasztó lehet, de ha az elejére nézel, felismerheted a szabványos elemeket, mint például a DOCTYPE deklaráció (A), a nyitó <code v-pre>&lt;html&gt;</code> tag (B), a nyitó <code v-pre>&lt;head&gt;</code> tag (C), különböző <code v-pre>&lt;meta&gt;</code> tag-ok (D), a nyitó <code v-pre>&lt;title&gt;</code> tag (E), és a záró <code v-pre>&lt;/title&gt;</code> tag (F).</p>
<p><img src="@source/demo/images/2-fejezet/41.1.oldal.png" alt="" loading="lazy">
<img src="@source/demo/images/2-fejezet/41.2.oldal.png" alt="" loading="lazy"></p>
<h2 id="ervenyesitsen-egy-weboldalt" tabindex="-1"><a class="header-anchor" href="#ervenyesitsen-egy-weboldalt"><span>Érvényesítsen egy weboldalt</span></a></h2>
<p>Az HTML helyességének ellenőrzéséhez validálhatod azt. Különböző módszerek állnak rendelkezésre az HTML validálására. Például néhány kód szerkesztő, integrált fejlesztői környezet és webes szerkesztő eszköz rendelkezik beépített validálási funkciókkal.</p>
<p>Ez a szakasz bemutatja, hogyan lehet validálni az HTML-t a W3C Markup Validation Service segítségével, ami egy online erőforrás, amelyet a World Wide Web Consortium (W3C) nyújt, a fő nemzetközi szabványosítási szervezet a World Wide Web számára. Validálhatsz úgy, hogy feltöltöd a fájlt, ahogy itt láthatod; megadod az ellenőrzendő weboldal URI-ját; vagy egyszerűen beilleszted vagy begépeled a kódot egy mezőbe.</p>
<h3 id="a-weboldal-validalasa" tabindex="-1"><a class="header-anchor" href="#a-weboldal-validalasa"><span>A weboldal validálása:</span></a></h3>
<ol>
<li>
<p>Nyiss meg egy böngészőablakot a <a href="https://validator.w3.org" target="_blank" rel="noopener noreferrer">https://validator.w3.org<ExternalLinkIcon/></a> címre.</p>
</li>
<li>
<p>Kattints a Fájl feltöltésével történő validálásra, hogy kövesd ezt az példát. <br>
<code v-pre>A)</code> Kattinthatsz a URI alapú validálásra, ha egy már online lévő weboldalt szeretnél ellenőrizni.</p>
<p><code v-pre>B)</code> Kattinthatsz a Közvetlen bemenet alapján történő validálásra, ha a kódot beilleszted - vagy begépeled - egy mezőbe.</p>
</li>
<li>
<p>Kattints a Fájl kiválasztása lehetőségre. <br>
Megjelenik a Megnyitás párbeszédpanel.</p>
</li>
<li>
<p>Navigálj a megfelelő mappához.</p>
</li>
<li>
<p>Kattints a fájlra.</p>
</li>
<li>
<p>Kattints a Megnyitás lehetőségre.</p>
</li>
<li>
<p>Kattints az Bővítés (váltás) gombra a További lehetőségek mellett. <br>
Megjelenik a További lehetőségek szakasz.</p>
<p><code v-pre>C)</code> A fájlnév megjelenik a Fájl mezőben.</p>
<p><code v-pre>D)</code> Kattinthatsz a Karakterkódolás (✔) gombra, és meghatározhatod a kívánt karakterkódolást a &quot;(automatikus észlelés)&quot; helyett.</p>
<p><code v-pre>E)</code> Kattinthatsz a Dokumentumtípus (✔) gombra, és meghatározhatod a kívánt dokumentumtípust a &quot;(automatikus észlelés)&quot; helyett.</p>
<p><code v-pre>F)</code> az Hibaüzenetek csoportosítása típus szerint (O váltása) gombra az üzenetek csoportosításához. Az Üzenetek listázása sorrendben beállítás az alapértelmezés.</p>
<p>A Markup Validation Service ellenőrzi a fájlban lévő HTML-t.</p>
<p><code v-pre>G)</code> A hibalista azonosítja a talált hibákat a HTML-ben.</p>
<p><code v-pre>H)</code> A fájl tartalmazza a <code v-pre>&lt;bdy&gt;</code> tag-ot, egy a <code v-pre>&lt;body&gt;</code> tag elírását, amely a body elemet zárja egy HTML-dokumentumnak.</p>
<p><code v-pre>I)</code> Mivel a <code v-pre>&lt;body&gt;</code> tag hiányzik, a záró <code v-pre>&lt;/body&gt;</code> tag is hibát okoz.</p>
<p><code v-pre>J)</code> Egy másik hiba azért következik be, mert nincs <code v-pre>&lt;/bdy&gt;</code> záró tag, amely a <code v-pre>&lt;bdy&gt;</code> tag-ot zárná.</p>
</li>
</ol>
<figure><img src="@source/demo/images/2-fejezet/42.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="9">
<li>
<p>A hibákat megvizsgálva javítsa ki a HTML-t, kattintson a Fájl kiválasztása gombra, és töltse fel a javított fájlt.</p>
</li>
<li>
<p>Kattintson az Ellenőrzés gombra. A Markup Validation Service ellenőrzi a fájlban lévő HTML-t. <br>
<code v-pre>K)</code> A „Dokumentum ellenőrzése befejeződött. Nincsenek hibák vagy megjelenítendő figyelmeztetések.” jelzi, hogy a fájl érvényes.</p>
<p><code v-pre>L)</code> A Bezárás (X) gombra kattintva bezárhatja a böngészőablakot.</p>
</li>
</ol>
<figure><img src="@source/demo/images/2-fejezet/43.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">Tipp:</p>
<p><strong>Miért mutat hibát a Markup Validation Service egy olyan HTML-fájl esetében, amely helyesen jelenik meg egy böngészőben?</strong></p>
<p>A WEB hatalmas mennyiségű hibás HTML-t tartalmaz, ezért a böngészők úgy vannak kialakítva, hogy tolerálják a hibákat, és hogy weboldalakat a lehető legjobban jelenítsék meg. Ez azt jelenti, hogy egy weboldal böngészőben történő megtekintése nem hatékony annak ellenőrzése, hogy az oldal HTML-je érvényes-e. Annak érdekében, hogy weblapjai minden böngészőben helyesen jelenjenek meg, mindenképpen ellenőrizze minden oldal HTML-jét, és távolítsa el a hibákat.</p>
</div>
<h2 id="masik-weboldal-letrehozasa" tabindex="-1"><a class="header-anchor" href="#masik-weboldal-letrehozasa"><span>Másik weboldal létrehozása</span></a></h2>
<p>Ebben a szakaszban létrehozol egy második weboldalt a Visual Studio Code segítségével, ugyanazokat a technikákat alkalmazva, mint az előző fejezetben létrehozott első oldal esetén. Ezt az oldalt azért hozod létre, hogy egy hiperhivatkozás célját szolgálja, amit később létrehozol a fejezet későbbi részében. Az oldalnak nem kell bonyolultnak lennie; csak jelen kell lennie annak érdekében, hogy létrehozd a kapcsolatot hozzá a korábbi oldalról.</p>
<ol>
<li>
<p>A Visual Studio Code-ban kattints az Explorer (Tárló) ( ) ikonra. <br>
Megnyílik a fő oldalsáv, amely megjeleníti a Tárló ablakot.</p>
</li>
<li>
<p>Vigyázz a mappa fejlécére és kattints az Új fájl ( ) ikonra. <br>
Megjelenik egy szerkesztő doboz.</p>
</li>
<li>
<p>Írd be a fájlnevet, beleértve a .html kiterjesztést, majd nyomd meg az Enter billentyűt. <br>
Az példában a fájlnevet keyboard_types.html-nek használják.</p>
<p>A Visual Studio Code létrehozza a fájlt és megjeleníti a fő ablakban.</p>
</li>
<li>
<p>Írj be egy ! karaktert. <br>
Az Automatikus Kiegészítés listája megjelenik, amely az ! karakterrel kezdődő elérhető Automatikus Kiegészítés bejegyzéseket mutatja.</p>
</li>
<li>
<p>Kattints az Emmet rövidítés elemre. <br>
A Visual Studio Code kibővíti a rövidítést, és a weboldal vázának kódját helyettesíti a felkiáltójel helyén.</p>
</li>
<li>
<p>Az alapértelmezett &quot;Document&quot; cím szöveg kiválasztva marad, írj be a weboldal címét.</p>
</li>
<li>
<p>Kattints a <code v-pre>&lt;/body&gt;</code> tag elé, és írj be néhány egyszerű HTML-t. Íme egy példa</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Types of Computer Keyboards<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Many types of computer keyboards are available.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>With a little research, you can find just the right type of keyboard for you!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<p><img src="@source/demo/images/2-fejezet/44.1.oldal.png" alt="" loading="lazy"> <br>
<img src="@source/demo/images/2-fejezet/44.2.oldal.png" alt="" loading="lazy"></p>
<h2 id="a-hiperhivatkozasok-lenyegenek-megertese" tabindex="-1"><a class="header-anchor" href="#a-hiperhivatkozasok-lenyegenek-megertese"><span>A hiperhivatkozások lényegének megértése</span></a></h2>
<p>A weben hiperhivatkozásokat használnak, gyakran egyszerűen linkeknek nevezve, hogy kapcsolatokat hozzanak létre különböző weboldalak vagy oldalrészek között. Ha egy linkre kattintunk az egyik oldalon, a böngésző megjeleníti a kapcsolt oldalt, vagy ugyanabban a böngészőablakban vagy fülön, vagy egy új böngészőablakban vagy fülön.</p>
<p>Ebben a szakaszban megtanulod a hiperhivatkozások alapjait, és azonosítod azokat az HTML elemeket, amelyek alkotják a hiperhivatkozást. A következő szakaszokban először egyszerű hiperhivatkozásokat, majd olyan hiperhivatkozásokat hozol létre, amelyek átirányítják a böngészőt egy másik célpontra.</p>
<h3 id="identify-the-components-of-a-hyperlink" tabindex="-1"><a class="header-anchor" href="#identify-the-components-of-a-hyperlink"><span>Identify the Components of a Hyperlink</span></a></h3>
<p>Az HTML-ben a hiperhivatkozás egy <code v-pre>&lt;a&gt;</code> tag-ot használ, ahol az &quot;a&quot; betű az anchor rövidítése. A hiperhivatkozás <code v-pre>&lt;a&gt;</code> tag-ja a következő formátumot használja:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cím<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>link text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Itt a href - hyperlink referencia - attribútum azt jelzi, hogy az anchor címke egy hiperhivatkozást tartalmaz. A hivatkozás címe, amelyet dupla idézőjelek között adnak meg, megadja a hiperhivatkozás célját. A hivatkozás szöveg, amely megjelenik az <code v-pre>&lt;a&gt;</code> nyitó címkéje és a záró <code v-pre>&lt;/a&gt;</code> címke között, a weboldalon megjelenő szöveget biztosítja a hivatkozás jelzésére.
Például a következő hiperhivatkozás megjeleníti a &quot;keyboard types&quot; szöveget, és a www.kybz.info webhelyen található keyboard_types.html nevű oldalra mutat.</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.kybz.info/keyboard_types.html<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>keyboard types<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A közelben látható illusztráció bemutatja a linkelt szót a kontextusban. Ha az egeret egy hivatkozásra (A) helyezed, a legtöbb böngésző megjeleníti a hivatkozás célját. Ebben a példában a Google Chrome az ablak bal alsó sarkában (B) jeleníti meg a hivatkozás célját.</p>
<figure><img src="@source/demo/images/2-fejezet/45.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="hogyan-hozzon-letre-hiperhivatkozast-weboldalai-kozott" tabindex="-1"><a class="header-anchor" href="#hogyan-hozzon-letre-hiperhivatkozast-weboldalai-kozott"><span>Hogyan hozzon létre hiperhivatkozást weboldalai között</span></a></h2>
<p>Most, hogy két weboldalt hozott létre, hiperhivatkozásokat hozhat létre közöttük. Hogy  hiperhivatkozást készítsen, szúrjon be egy horgonycímkét a weboldal megfelelő helyére, és adja meg a hivatkozás célhelyét, és írja be az oldalon megjelenítendő szöveget, amely a hivatkozást ábrázolja.</p>
<p>Az ebben a részben található példa hiperhivatkozást hoz létre a számítógépén tárolt fájlok között, nem pedig a webszerveren tárolt fájlok között.</p>
<h3 id="hogyan-hozzon-letre-hiperhivatkozast-weboldalai-kozott-1" tabindex="-1"><a class="header-anchor" href="#hogyan-hozzon-letre-hiperhivatkozast-weboldalai-kozott-1"><span>Hogyan hozzon létre hiperhivatkozást weboldalai között</span></a></h3>
<ol>
<li>A Visual Studio Code programban kattintson Fájlkezelőre (Explorer). <br>
Megnyílik az elsődleges oldalsáv, amelyen az Intéző panel látható.</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Ha a webhely mappája össze van csukva, kattintson a Kibontás (Expand) gombra a kibontásához.</p>
</div>
<ol start="2">
<li>
<p>Kattintson arra a weboldalra, amelyen a hiperhivatkozást létre kívánja hozni. A weboldal a Visual Studio Code ablakának fő részében jelenik meg.</p>
</li>
<li>
<p>Kattintson a beillesztési pont elhelyezéséhez arra a helyre, ahol a hivatkozást szeretné elérni.</p>
</li>
<li>
<p>Írja be a. <br>
Megnyílik az Automatikus kiegészítés lista, amely az „a” karakterrel kezdődő, elérhető automatikus kiegészítési bejegyzéseket mutatja.</p>
</li>
<li>
<p>Kattintson az első elemre, amelyet Emmet rövidítés-nek (Emmet Abbreviation-nak) azonosítanak. <br>
A Visual Studio Code kiterjeszti a rövidítést a hiperhivatkozás horgonycímkéjére, amint az alábbiakban látható.</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>A)</code> Visual Studio Code a beszúrási pontot a dupla idézőjelek közé helyezi.</p>
</li>
<li>
<p>Kezdje el beírni a dupla idézőjelek közé tartozó hivatkozás célhelyét. A példa a keyboard_types.html-t használja. így elkezdheti begépelni a keyb parancsot. <br>
Megnyílik az Automatikus kiegészítés lista, amely megjeleníti a mappák lehetséges egyezéseit.</p>
</li>
<li>
<p>Ha az egyezés helyes, kattintson rá. <br>
Ellenkező esetben fejezze be a cél beírását.</p>
</li>
</ol>
<p><code v-pre>B)</code> A cél kék aláhúzott szövegként jelenik meg a kódban, jelezve, hogy egy hivatkozás.</p>
<p><img src="@source/demo/images/2-fejezet/46.1.oldal.png" alt="" loading="lazy">
<img src="@source/demo/images/2-fejezet/46.2.oldal.png" alt="" loading="lazy">
<img src="@source/demo/images/2-fejezet/46.3.oldal.png" alt="" loading="lazy">
<img src="@source/demo/images/2-fejezet/46.4.oldal.png" alt="" loading="lazy"></p>
<ol start="8">
<li>
<p>Kattintson az <code v-pre>&lt;a&gt;</code> címkét bezáró &gt; és a <code v-pre>&lt;/a&gt;</code> címkét megnyitó &lt; jelre.</p>
</li>
<li>
<p>Írja be azt a szöveget, amelyet az oldalon megjeleníteni szeretne a hivatkozáshoz. Ez a példa a „billentyűzettípusok” szavakat használja.</p>
</li>
<li>
<p>Írja be a mondat befejezéséhez szükséges szöveget.</p>
</li>
<li>
<p>Kattintson a jobb gombbal az oldal nevére az Intéző ablaktáblában, majd kattintson a Felfedezés lehetőségre a Fájlkezelőben (Reveal in File Explorer) gombra a fájl Fájlböngésző ablakban való megjelenítéséhez. Ezután kattintson a jobb gombbal a fájlra, kattintson vagy jelölje ki: Megnyitás elemet (Open With…), és kattintson a böngészőre. <br>
A weboldal az Ön által választott böngészőben nyílik meg.</p>
</li>
<li>
<p>Kattintson a linkre. <br>
Megjelenik a hivatkozott oldal.</p>
</li>
</ol>
<p><img src="@source/demo/images/2-fejezet/47.1.oldal.png" alt="" loading="lazy">
<img src="@source/demo/images/2-fejezet/47.2.oldal.png" alt="" loading="lazy">
<img src="@source/demo/images/2-fejezet/47.3.oldal.png" alt="" loading="lazy">
<img src="@source/demo/images/2-fejezet/47.4.oldal.png" alt="" loading="lazy"></p>
<div class="hint-container tip">
<p class="hint-container-title">TIPP.</p>
<p><strong>Milyen más típusú hiperhivatkozásokat hozhatok létre HTML használatával?</strong></p>
<p>Az ebben a részben bemutatott egyszerű hivatkozásokon kívül létrehozhat olyan hivatkozásokat, amelyek új böngészőlapokat vagy ablakokat nyitnak meg, olyan hivatkozásokat, amelyek a böngészőt egy másik célhelyre irányítják át, valamint olyan hivatkozásokat, amelyek e-mail üzeneteket indítanak el. Lásd az &quot;5. fejezetet a hivatkozásokkal való munkával kapcsolatos részletes információkért” részben.</p>
</div>
<h2 id="a-http-allapotkodok-ertelmezese" tabindex="-1"><a class="header-anchor" href="#a-http-allapotkodok-ertelmezese"><span>A HTTP állapotkódok értelmezése</span></a></h2>
<p>A HTTP öt állapotkód-kategóriát használ a webszerverek és az ügyfelek közötti interakciók figyelésére. Az információs válasz azt jelzi, hogy a szerver feldolgozza a kérést, míg a sikeres válasz azt jelzi, hogy a szerver teljesíteni tudja az ügyfél kérését. Az átirányítási üzenet azt jelenti, hogy a kiszolgáló átirányítja a kliens kérését, ügyfélhiba-válasz keletkezik, amikor a kiszolgáló problémát azonosít az ügyfél kérelmével kapcsolatban, és kiszolgálóhiba-válasz történik, amikor a kiszolgáló problémába ütközik a kérés teljesítése során. Ezek az állapotkódok értékes eszközökként szolgálnak a webes kommunikáció problémáinak azonosításához és hibaelhárításához.</p>
<h3 id="http-allapotkodok-es-jelentesuk" tabindex="-1"><a class="header-anchor" href="#http-allapotkodok-es-jelentesuk"><span>HTTP állapotkódok és jelentésük</span></a></h3>
<p>A 2-1. táblázat szemlélteti a webböngészés és -fejlesztés során gyakran előforduló HTTP-állapotkód-válaszokat.</p>
<table>
<thead>
<tr>
<th style="text-align:left"></th>
<th style="text-align:left">Table 2-1:</th>
<th style="text-align:left">HTTP Status Codes and Their Meanings</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">HTTP kód</td>
<td style="text-align:left">Állapot</td>
<td style="text-align:left">Magyarázat</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left"><strong>Információs válaszok</strong></td>
</tr>
<tr>
<td style="text-align:left">100</td>
<td style="text-align:left">Folytatás (Continue)</td>
<td style="text-align:left">Az ügyfélnek folytatnia kell a kérést, ha az még nem fejeződött be; ha a kérés befejeződött, az ügyfélnek figyelmen kívül kell hagynia ezt a kódot.</td>
</tr>
<tr>
<td style="text-align:left">101</td>
<td style="text-align:left">Protokollváltás (Switching Protocols)</td>
<td style="text-align:left">A kiszolgáló a kliens frissítési kérését követően a megadott protokollra vált.</td>
</tr>
<tr>
<td style="text-align:left">102</td>
<td style="text-align:left">Feldolgozás (Processing)</td>
<td style="text-align:left">A szerver egy WebDAV kérést dolgoz fel, de még nem kapott választ.</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left"><strong>Sikeres válaszok</strong></td>
</tr>
<tr>
<td style="text-align:left">200</td>
<td style="text-align:left">OK</td>
<td style="text-align:left">A fájlkérelem sikeresen befejeződött.</td>
</tr>
<tr>
<td style="text-align:left">201</td>
<td style="text-align:left">Létrehozva (Created)</td>
<td style="text-align:left">Egy POST vagy PUT kérés sikeres volt, új erőforrást, például weboldalt hozott létre.</td>
</tr>
<tr>
<td style="text-align:left">202</td>
<td style="text-align:left">Elfogadva (Accepted)</td>
<td style="text-align:left">A szerver megkapta a kérést, de még nem intézkedett.</td>
</tr>
<tr>
<td style="text-align:left">204</td>
<td style="text-align:left">Nincs tartalom (No Content)</td>
<td style="text-align:left">A szervernek nincs elküldhető tartalma a kéréshez, de visszaküldi a fejléceket, ha hasznosak lesznek.</td>
</tr>
<tr>
<td style="text-align:left">205</td>
<td style="text-align:left">Tartalom visszaállítása (Reset Content)</td>
<td style="text-align:left">A szerver utasítja a felhasználói ügynököt, hogy állítsa vissza a kérést küldő dokumentumot.</td>
</tr>
<tr>
<td style="text-align:left">206</td>
<td style="text-align:left">Részleges tartalom (Partial Content)</td>
<td style="text-align:left">A szerver egy olyan Range fejlécre ad választ, amely az erőforrásnak csak egy részét kéri le.</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left"><strong>Átirányítási üzenetek</strong></td>
</tr>
<tr>
<td style="text-align:left">300</td>
<td style="text-align:left">Több választási lehetőség (Multiple Choices)</td>
<td style="text-align:left">A szervernek több erőforrása van a kéréshez, és az ügyfélnek egyet kell választania.</td>
</tr>
<tr>
<td style="text-align:left">301</td>
<td style="text-align:left">Véglegesen áthelyezve (Moved Permanently)</td>
<td style="text-align:left">A kért URL véglegesen megváltozott a szerver által visszaadott új URL-re.</td>
</tr>
<tr>
<td style="text-align:left">302</td>
<td style="text-align:left">Található (Found)</td>
<td style="text-align:left">A szerver egy másik URL-címen találta a kért erőforrást, de a kliensnek továbbra is az eredeti URL-t kell használnia, mert a változás állítólag ideiglenes.</td>
</tr>
<tr>
<td style="text-align:left">303</td>
<td style="text-align:left">Lásd Egyéb (See Other)</td>
<td style="text-align:left">A szerver arra utasítja a klienst, hogy küldjön egy GET kérést egy másik URL-re.</td>
</tr>
<tr>
<td style="text-align:left">307</td>
<td style="text-align:left">Ideiglenes átirányítás (Temporary Redirect)</td>
<td style="text-align:left">Ugyanaz, mint a 302-nél, de az ügyfélnek ugyanazt a HTTP-módszert, például a POST-t kell használnia az új kéréshez.</td>
</tr>
<tr>
<td style="text-align:left">308</td>
<td style="text-align:left">Állandó átirányítás (Permanent Redirect)</td>
<td style="text-align:left">Ugyanaz, mint a 301-nél, de a kliensnek ugyanazt a HTTP-módszert kell használnia, például a POST-t az új kéréshez.</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left"><strong>Ügyfél hibaválaszai</strong></td>
</tr>
<tr>
<td style="text-align:left">400</td>
<td style="text-align:left">Rossz kérelem (Bad Request)</td>
<td style="text-align:left">Az ügyfélkérelem formátuma nem megfelelő, vagy megtévesztő útválasztást tartalmaz.</td>
</tr>
<tr>
<td style="text-align:left">401</td>
<td style="text-align:left">Jogosulatlan (Unauthorized)</td>
<td style="text-align:left">A kliensnek hitelesítenie kell magát az oldal eléréséhez.</td>
</tr>
<tr>
<td style="text-align:left">403</td>
<td style="text-align:left">Tilos (Forbidden)</td>
<td style="text-align:left">Az ügyfélnek nincs engedélye az oldal eléréséhez.</td>
</tr>
<tr>
<td style="text-align:left">404</td>
<td style="text-align:left">Nem található (Not Found)</td>
<td style="text-align:left">A szerver nem találja az ügyfél által kért oldalt. Egyes szerverek 403-as hiba helyett 404-es hibát küldenek, hogy elfedjék azt a tényt, hogy az oldal létezik, de a kliens számára tilos hozzáférni.</td>
</tr>
<tr>
<td style="text-align:left">426</td>
<td style="text-align:left">Frissítés szükséges (Upgrade Required)</td>
<td style="text-align:left">A szerver visszautasítja a kérést az ügyfél által használt protokollal, de teljesítheti a kérést, ha a kliens frissít a megadott protokollra.</td>
</tr>
<tr>
<td style="text-align:left">429</td>
<td style="text-align:left">Túl sok kérés (Too Many Requests)</td>
<td style="text-align:left">A szerver korlátozza a klienst, mert az ügyfél túl sok kérést küldött egy adott időtartamon belül.</td>
</tr>
<tr>
<td style="text-align:left">451</td>
<td style="text-align:left">Jogi okok miatt nem érhető el (Unavailable for Legal Reasons)</td>
<td style="text-align:left">A szerver elutasítja a kérést, mert nem tudja legálisan biztosítani a tartalmat; például azért, mert a tartalom egy adott területre korlátozva van, amelyen az ügyfél kívül tartózkodik.</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left"><strong>Szerverhiba-válaszok</strong></td>
</tr>
<tr>
<td style="text-align:left">500</td>
<td style="text-align:left">Belső szerverhiba (Internal Server Error)</td>
<td style="text-align:left">A szerver hibát szenvedett, amelyet nem tud megoldani.</td>
</tr>
<tr>
<td style="text-align:left">501</td>
<td style="text-align:left">Nincs végrehajtva (Not Implemented)</td>
<td style="text-align:left">A szerver nem fogadja el a használt kérési módot. A szervereknek el kell fogadniuk a GET és READ kéréseket.</td>
</tr>
<tr>
<td style="text-align:left">502</td>
<td style="text-align:left">Rossz átjáró (Bad Gateway)</td>
<td style="text-align:left">A szerver megpróbálta továbbítani a kérést egy másik szerverhez, de érvénytelen választ kapott.</td>
</tr>
<tr>
<td style="text-align:left">503</td>
<td style="text-align:left">A szolgáltatás nem elérhető (Service Unavailable)</td>
<td style="text-align:left">A szerver nem tudja teljesíteni a kérést, mert túlterhelt, vagy a szerver, amelyről az információkat kapná, nem működik.</td>
</tr>
<tr>
<td style="text-align:left">504</td>
<td style="text-align:left">Gateway Timeout (Átjáró időtúllépés)</td>
<td style="text-align:left">A szerver átjáróként működik, továbbítja a kliens kérését egy másik szervernek, de nem kapott választ attól a szervertől a megadott időszakban.</td>
</tr>
</tbody>
</table>
</div></template>


