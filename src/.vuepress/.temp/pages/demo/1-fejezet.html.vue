<template><div><h2 id="a-web-mukodesenek-megertese" tabindex="-1"><a class="header-anchor" href="#a-web-mukodesenek-megertese"><span>A web működésének megértése</span></a></h2>
<p>A World Wide Web, amelyet manapság általában csak Webnek hívnak, rengeteg weboldalból áll amelyek az interneten keresztül egy webböngésző segítségével érhetők el. Minden weboldal tartalmaz egy vagy több web oldalt - általában sokkal többet. Minden weboldalt egy egyedi cím, az úgynevezett Uniform Resource Locator, azaz URL azonosít. Egy weboldal lekérdezéséhez a felhasználó beírja az URL-címet a böngésző alkalmazásba, vagy az URL beírásával vagy egy linkre kattintva. A weboldalnak otthont adó webkiszolgáló továbbítja a kért oldalt a böngészőnek, amely megjeleníti annak tartalmát a felhasználó számára.</p>
<h3 id="mi-a-weboldal" tabindex="-1"><a class="header-anchor" href="#mi-a-weboldal"><span>Mi a weboldal?</span></a></h3>
<p>A weboldal olyan digitális dokumentum, amely a weben keresztül, egy webböngésző alkalmazással érhető el. A weboldalak a következőkben tárgyalt weboldalak összetevői, amelyeket a később tárgyalt webkiszolgálókon tárolnak.</p>
<p>A weboldalak tartalmazhatnak szöveget, képeket, hang- vagy videofájlokat és egyéb digitális erőforrásokat, például dokumentumokat, amelyeket a látogatók letölthetnek. A weboldalak elrendezése és formázása a Hypertext Markup Language, HTML és a Cascading Style Sheets, CSS segítségével történik. A weboldalak tartalma lehet statikus vagy dinamikus; ezek interaktív funkciókat is tartalmazhatnak, például űrlapokat, amelyek lehetővé teszik a látogatók számára az adatok bevitelét vagy a tartalommal való interakciót.</p>
<h3 id="mi-a-weboldal-1" tabindex="-1"><a class="header-anchor" href="#mi-a-weboldal-1"><span>Mi a weboldal?</span></a></h3>
<p>A weboldal egy webkiszolgálón tárolt és a webböngészők számára az interneten keresztül elérhetővé tett weboldalak gyűjteménye. Egy weboldal jellemzően több oldalt tartalmaz, amelyek hiperhivatkozásokkal kapcsolódnak egymáshoz, és így alkotnak egy összefüggő struktúrát, amely lehetővé teszi a látogatók számára a weboldal különböző területei közötti gyors navigációt.</p>
<p>Egy weboldal jellemzően egy adott célt szolgál. Például egy személyes weboldal bemutathatja a tulajdonos érdeklődési körét és tehetségét; egy szervezet honlapja a szervezet célját és céljait ismertetheti és a látogatókat csatlakozásra ösztönözheti; vagy egy vállalat honlapja a lehető legjobb fényben tünteti fel a vállalatot és lehetőséget biztosít a termékek megvásárlására.</p>
<h3 id="mi-a-webszerver" tabindex="-1"><a class="header-anchor" href="#mi-a-webszerver"><span>Mi a webszerver?</span></a></h3>
<p>A webkiszolgáló egy olyan szoftver, amely válaszol a webes ügyfelek, például a webböngészők kéréseire, és visszaküldi az adatokat, ha az elérhető és engedélyezett. A webkiszolgáló weboldalakat, képeket, videókat és egyéb tartalmakat tárol hogy azokat az ügyfelek számára kiszolgálhassa.</p>
<p>A webszerver szinte bármilyen számítógépes hardveren futhat, az olyan apró számítógépektől kezdve, mint a Raspberry Pi sorozaton keresztül egészen a szerverfarmoknak nevezett teljes körű létesítményekben telepített dedikált szervergépekig. Jelen íráskor, sok webkiszolgálót felhőalapú infrastruktúrán telepítenek, mint például az Amazon Web Services, az AWS vagy az Microsoft Azure.</p>
<p>A webkiszolgáló szinte bármilyen számítógépes operációs rendszeren futhat, beleértve a Windows, a macOS, a Linux és az iOS, iPadOS és Android mobil operációs rendszereket.</p>
<p>A webkiszolgálók az internetes infrastruktúra kritikus részét képezik, és webes tartalmakat juttatnak el a felhasználókhoz az egész világon.</p>
<h3 id="mi-a-web-bongeszo" tabindex="-1"><a class="header-anchor" href="#mi-a-web-bongeszo"><span>Mi a web böngésző?</span></a></h3>
<p>A webböngésző egy olyan alkalmazás, amelyet a weboldalak és egyéb tartalmak elérésére és megjelenítésére használnak a weben. A web böngésző segítségével egy weboldalt a cím beírásával vagy beillesztésével, illetve egy linkre kattintva érhet el. A Webböngészők
a Hypertext Transport Protocol-t (HTTP) vagy annak biztonságos változatát, a Hypertext Transport Protocol Secure-t (HTTPS) használják, hogy weboldalakat kérjenek le a web szerverekről majd megjelenítsék a  tartalmat a böngésző ablakában.</p>
<p>A népszerű webböngészők közé tartozik a Google Chrome, a Mozilla Firefox, a Microsoft Edge és az Apple Safari. Ezek a böngészők számos olyan funkcióval rendelkeznek, amelyek megkönnyítik és felgyorsítják a böngészést, mint például a könyvjelzők és a füles böngészés.</p>
<p>Hogyan találja meg a webböngésző a webhelyet tároló webkiszolgálót?
Amikor egy weboldal URL-címét beírja a böngésző címsorába, a böngésző a Domain Name System-et, azaz a DNS-t használja a weboldalnak otthont adó webkiszolgáló internetprotokoll-címének (IP-cím) megkeresésére. A DNS egy hierarchikus szerverrendszert használ az egyes weboldalakhoz tartozó IP-címek rendszerezésére, tárolására és visszaküldésére.</p>
<p>A domain név egy szövegalapú azonosító, amely egy egyedi helyet jelöl az interneten. Például, www.wiley.com a domain neve a John Wiley &amp; Sons, Inc. weboldalának, ennek és több más könyv kiadójának.  A domain név több részből áll. A jobb szélső rész a legfelső szintű tartomány, vagy TLD - ebben az esetben .com. Balra haladva a következő rész - ebben az esetben a wiley - a másodlagos domain név szintű domain. A következő rész, a www, az aldomain.</p>
<h2 id="a-html-css-es-reszponziv-web-szerkesztes-megertese" tabindex="-1"><a class="header-anchor" href="#a-html-css-es-reszponziv-web-szerkesztes-megertese"><span>A HTML, CSS és reszponzív web szerkesztés megértése</span></a></h2>
<p>Mielőtt elkezdené oldalak létrehozását webhelye számára, valószínűleg hasznos lesz megértenie a HTML és a CSS lényegét, a két nyelvet, amelyekkel végig fog dolgozni
ebben a könyvben. Ez a rész bemutatja a HTML-t és a CSS-t. Emellett áttekintést nyújt a reszponzív web szerkesztésről, egy olyan megközelítésről, amelynek célja, hogy a weboldalakat a különböző típusú felhasználók számára egyformán hozzáférhetővé tegye
különböző képernyőméretű és felbontású eszközökön.</p>
<p>A HTML- és CSS-szabványokat a World Wide Web Consortium (W3C) dolgozza ki és tartja karban, számos vállalat és szervezet hozzájárulásával, beleértve a főbb böngészők gyártóit is.</p>
<h3 id="mi-a-html" tabindex="-1"><a class="header-anchor" href="#mi-a-html"><span>Mi a HTML?</span></a></h3>
<p>A HTML a Hypertext Markup Language (hipertext jelölés) rövidítése, ami egy olyan nyelv, amelyet weboldalak létrehozására használnak. A hipertext olyan szöveget jelent, amely hiperhivatkozásokat tartalmaz más helyekre ugyanazon az oldalon vagy más oldalakra,
így amikor rákattint a hivatkozott szövegre, a böngésző megjeleníti a hivatkozott helyet vagy oldalt.</p>
<p>A HTML lehetővé teszi a szöveg és más elemek &quot;jelölését&quot;. kódokkal, amelyek meghatározzák, hogy jelennek meg az elemek. Például megjelölhet egy bekezdést mint
egy első szintű címsort közbezárva a megfelelő HTML kódokkal, amelyek <code v-pre>&lt;h1&gt;</code> az elején és <code v-pre>&lt;/h1&gt;</code> a végén:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>This Is a Heading 1 Paragraph<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Hasonlóképpen megjelölhet egy bekezdést is, hogy szabályos “bekezdés” szöveget kapj a <code v-pre>&lt;p&gt;</code> és a <code v-pre>&lt;/p&gt;</code> kódok közé zárva:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>This is a paragraph of regular text.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A közeli ábrán látható, hogyan néz ki a címsor és a bekezdés a Google Chrome böngésző alapértelmezett stílusával a h1 <code v-pre>(A)</code> és a p <code v-pre>(B)</code> elemen. A saját stílusod meghatározásával és alkalmazásával tudod szabályozni a formázást.</p>
<p>A HTML jelenleg az 5-ös verziónál tart, amit általában HTML5-nek nevezünk. De egy fix verzió helyett a HTML 5 egy úgynevezett élő szabvány, folyamatos fejlesztésekkel és funkciókkal. Tehát bár a HTML5 volt az első megjelenés 2008 januárjában és ment végig egy nagyszabású frissítésen 2014 októberében, még mindig ez az aktuális verzió - és ez
valószínűleg az aktuális verzió is marad még legalább néhány évig.</p>
<figure><img src="@source/demo/images/1-fejezet/6.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="mi-a-css" tabindex="-1"><a class="header-anchor" href="#mi-a-css"><span>Mi a CSS?</span></a></h3>
<p>A CSS a Cascading Style Sheets rövidítése, egy nyelv, amelyet a weboldalak formázására használnak HTML-ben. A CSS lehetővé teszi a vizuális elrendezés vezérlését és a weboldalak megjelenését, beleértve a betűtípusokat, színeket, a szövegeket és pozícionálásokat szövegen és más elemeken.</p>
<p>A CSS szövegalapú utasításokból áll, amelyek meghatározzák az egyes elemekre alkalmazandó formázást. Például létrehozhat egy h1 stílust az előbb bemutatott h1 elem formázására.</p>
<p>A CSS-t háromféleképpen lehet implementálni: külső fájlként, a HTML-dokumentumba ágyazott stílusként, vagy egy adott HTML-címkén belül alkalmazott stílusok formájában. Általában egy külső fájl használata a legjobb, mert az lehetővé teszi több HTML dokumentum formázását egyetlen stíluslap segítségével. Amikor változtatásokra van szüksége, azt megteheted a külső CSS-ben ahelyett, hogy egyesével változtatnád a dokumentumokon.</p>
<h3 id="hogyan-keszitsunk-html-es-css-fajlokat" tabindex="-1"><a class="header-anchor" href="#hogyan-keszitsunk-html-es-css-fajlokat"><span>Hogyan készítsünk HTML és CSS fájlokat?</span></a></h3>
<p>Mind a HTML, mind a CSS csak szöveges fájlokból áll, így akár a legegyszerűbb szövegszerkesztővel is létrehozhatja őket, például a Windowshoz mellékelt Notepad szövegszerkesztővel. Azonban, hogy gyorsan és egyszerűen hozzon létre HTML és CSS
fájlokat, általában jobban jár, ha egy olyan szövegszerkesztőt vagy integrált fejlesztőkörnyezetet használ, amelyik funkciókat biztosít a kód beviteléhez és ellenőrzéséhez. Az ilyen szövegszerkesztőket gyakran nevezik kódszerkesztőknek.</p>
<p>Ez a könyv a Microsoft Visual Studio Code-ot ajánlja, egy ingyenes kódszerkesztő programot, amely Windows, macOS és Linux alatt fut, és tartalmaz néhány integrált fejlesztőkörnyezet funkciót. Lásd a &quot;Visual Studio Code&quot; című fejezet későbbi részében a Visual Studio Code telepítésére vonatkozó utasításokat.</p>
<h3 id="mi-a-reszponziv-web-szerkesztes" tabindex="-1"><a class="header-anchor" href="#mi-a-reszponziv-web-szerkesztes"><span>Mi a reszponzív web szerkesztés?</span></a></h3>
<p>A web kezdeti időszakában a legtöbb ember asztali számítógépet vagy laptopot használt a böngészéshez, amelynek képernyője mérsékelt mennyiségű információ megjelenítésére volt alkalmas - mondjuk 1024 × 768 felbontásra vagy annál nagyobbra. A legtöbb weboldalt úgy tervezték és kódolták, hogy az ilyen képernyőkön könnyen olvashatóak legyenek. Ha egy ilyen weboldalt egy sokkal kisebb vagy alacsonyabb felbontású képernyőn érne el, akkor valószínűleg az oldal szélességének csak egy részét látná olvasható méretben, és vízszintesen kellene görgetnie, hogy a többit is lássa. Napjainkban a látogatók sokféle eszközt használnak, a hatalmas képernyőkkel rendelkező asztali számítógépektől kezdve egészen a viszonylag apró képernyővel rendelkező táblagépekig és okostelefonokig. A böngészőeszközök e sokfélesége azt jelenti, hogy az egyméretű webdesign már nem kielégítő a legtöbb weboldal számára.</p>
<p>A különböző eszközökhöz való alkalmazkodás érdekében a weboldal-építők a reszponzív webdesignnak nevezett megközelítést alkalmazzák.A reszponzív webdesign olyan oldalakat hoz létre, amelyek alkalmazkodnak a különböző eszköztípusokhoz, különböző képernyőméretekhez és a vízszintes és függőleges tájoláshoz.</p>
<p>A reszponzív webdesign során a weboldal elrendezése és tartalma automatikusan alkalmazkodik a képernyő méretéhez. A reszponzív webdesign rugalmas rácsrendszereket, képeket és tipográfiát használ, hogy megváltoztassa a weboldal elrendezését. Médialekérdezéseket használ az eszköz képernyőméretének megfelelő stílus alkalmazásához.</p>
<p>A reszponzív webdesignnak számos egyértelmű előnye van a statikus webdesignnal szemben. Először is, egy reszponzív weboldal konzisztens felhasználói élményt nyújt a különböző típusú eszközökön, ahelyett, hogy előnyben részesítene egyes eszközöket másokkal szemben. Másodszor, egy reszponzív weboldal könnyebben olvasható, navigálható és használható a látogatók számára. Harmadszor, egy reszponzív weboldal javítja a hozzáférhetőséget, lehetővé téve a fogyatékkal élők számára, hogy kielégítően elérjék azt. Negyedszer, egy reszponzív weboldal javíthatja a keresőoptimalizálást, vagy röviden SEO-t.</p>
<h2 id="statikus-es-dinamikus-weboldalak-megertese" tabindex="-1"><a class="header-anchor" href="#statikus-es-dinamikus-weboldalak-megertese"><span>Statikus és dinamikus weboldalak megértése</span></a></h2>
<p>A weboldalához, statikus vagy dinamikus weboldalakat hozhat létre. A statikus weboldal egy
olyan oldal, amelynek tartalma rögzített, és nem változik, kivéve, ha szerkesztik azt. Ezzel szemben egy dinamikus weboldal tartalma szükség szerint változik.</p>
<p>A statikus weboldalak jól alkalmazhatóak bizonyos célokra, és valószínűleg Ön is szeretne majd létrehozni néhány statikus oldalt a weboldalához. Valószínű azonban, hogy számos weblapja számára előnyös lenne a naprakész információk vagy a látogatók igényeire való reagálás, ezért dinamikus weboldalakat kell létrehoznia.</p>
<h3 id="statikus-weboldalak-es-dinamikus-weboldalak-osszehasonlitasa" tabindex="-1"><a class="header-anchor" href="#statikus-weboldalak-es-dinamikus-weboldalak-osszehasonlitasa"><span>Statikus weboldalak és dinamikus weboldalak összehasonlítása</span></a></h3>
<p>A reszponzív weboldal egy olyan weboldal, amely megvizsgálja, hogy milyen típusú eszköz fér hozzá a weboldalhoz, és megjeleníti az adott tartalmat az eszköznek megfelelő módon. Például, ha meglátogat egy reszponzív weboldalt az asztali számítógépen, amely nagy kijelzővel rendelkezik, a weboldal az ön számítógép verziójának megfelelően formázott oldalát fogja betölteni.</p>
<p>Ezzel szemben, ha ugyanarra a reszponzív weboldalra tér vissza mobiltelefonjával, akkor a webszerver egy olyan formázott változattal szolgál ami megfelel a kisebb kijelzőknek.</p>
<p>Egy nem reszponzív weboldal egyszerűen minden látogatónak ugyanolyan típusú oldalt ad, függetlenül attól, hogy az megfelel-e a az eszköznek vagy sem. A nem reszponzív weboldal nem vizsgálja meg, hogy milyen típusú eszköz látogatja meg</p>
<p>Általában inkább egy reszponzív weboldalt szeretne létrehozni, nem pedig egy nem reszponzív weboldalt. Egy reszponzív weboldal készítésének számos előnye van:</p>
<ul>
<li>A weboldal tartalma folyamatosan használható különböző eszközökön egy kódbázis használatával. Nem kell különböző weboldalakat készíteni különböző eszközök számára.</li>
<li>Az egy kódbázis leegyszerűsíti a fejlesztést és frissítést és csökkenti a karbantartási költséget</li>
<li>Ha a weboldal látható és használható különböző eszközökön, az növelheti a márka elismerését és annak valószínűségét, hogy a látogatók megosszák a weboldalt a közösségi médiában, ami extra forgalmat generálhat a weboldal számára. Ilyenféle siker természetesen függ a weboldal tartalmától; reszponzivitás segít, de nem csodaszer.</li>
</ul>
<p>Több információért, hogy reszponzívvá tegye oldalát nézze meg a 10. fejezetet.</p>
<h2 id="eszkozok-megertese-weboldalak-keszitesehez" tabindex="-1"><a class="header-anchor" href="#eszkozok-megertese-weboldalak-keszitesehez"><span>Eszközök megértése weboldalak készítéséhez</span></a></h2>
<p>Sok különböző féle eszköz elérhető weboldalak készítésére. Ez a rész összefoglalja a rendelkezésre álló különféle típusú eszközöket, majd rámutat azokra az eszközökre, amelyeket ez a könyv használ, hogy bemutassa a HTML és CSS fájlok készítését.</p>
<p>A HTML és CSS egyaránt csak szöveget tartalmaz, szóval létre tudja hozni ezeket a fájlokat szöveg szerkesztő használatával. Bár nagyobb valószínűséggel fog használni egy kód szerkesztőt, egy alkalmazás ami segíti helyesen és gyorsan megírni a kódot. Valószínűleg szüksége lesz egy graphics‐manipulation alkalmazásra a weboldal számára alkalmas képek készítéséhez.</p>
<h3 id="szovegszerkeszto" tabindex="-1"><a class="header-anchor" href="#szovegszerkeszto"><span>Szövegszerkesztő</span></a></h3>
<p>A <em>szövegszerkesztő</em> egy alkalmazás egy szöveg létrehozására és szerkesztésére. A HTML és CSS fájlok egyaránt csak szövegből állnak, tehát a legalapvetőbb szövegszerkesztőt is használhatja ezek létrehozására és szerkesztésére. Például a Windows tartalmazza a tiszteletreméltó, de még mindig használható szövegszerkesztő a Jegyzettömböt, amely egy HTML-fájl szerkesztését mutatja be a mellékelt ábrán.</p>
<p>A Jegyzettömb se más szövegszerkesztő nem ad semmiféle specifikus funkciót HTML és CSS fájlok létrehozásához. Néhány purista
előnyben részesítik ezt a fajta minimalista megközelítést, de a legtöbb ember számára hasznos ha van segítsége a kód elkészítésében és ellenőrzésében.</p>
<figure><img src="@source/demo/images/1-fejezet/10.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="word-processor-szovegszerkeszto" tabindex="-1"><a class="header-anchor" href="#word-processor-szovegszerkeszto"><span>Word Processor (szövegszerkesztő)</span></a></h3>
<p>A <em>word processor</em> egy olyan applikáció amely szövegből, grafikából és más objektumokból álló dokumentumok elkészítésére alkalmas és szükség szerint formázható. HTML és CSS fájlok készítéshez használható szövegszerkesztő, ez általában nem egy jó megoldás, mivel rengeteg olyan funkciót hoz fel amit el kell kerülni mint például a formázás,
elrendezés, grafikus objektumok és revízió jelölés.</p>
<p>A szövegszerkesztő hasznos lehet weboldal készítéshez a már létező szövegszerkesztő dokumentumokból. Például a Microsoft Word lehetővé teszi, hogy a dokumentumokat három féle webes formátumba mentsen: a Single File Web Page formátum; a Web Page formátum, vagy a Web Page, Filtered formátum. Normális esetben a Web Page, Filtered formátumot választja, mert ez adja a legkompaktabb eredményt, csak azokat az információkat őrzi meg amelyek szükségesek a weboldal megjelenítéséhez és eldobja azon információkat amelyek csak a Word formátumnak szükséges. A Web Page formátum egyaránt elmenti az összes Word formázási információt effektíven megmentve az egész Word dokumentumot HTML formátumban. A Single File Web Page formátum egy nagy fájlt hoz létre, amely tartalmazza az összes szükséges objektumot a Word dokumentum elkészítéséhez.</p>
<h3 id="kod-szerkeszto" tabindex="-1"><a class="header-anchor" href="#kod-szerkeszto"><span>Kód szerkesztő</span></a></h3>
<p>A kódszerkesztő az egy fejlesztett szövegszerkesztő extra funkciókkal bővítve kódok létrehozásához - bármilyen HTML-től kezdve a programozási kódig. Általában egy kódszerkesztő a legjobb választás a HTML- és CSS-fájlok nulláról történő létrehozásához és ezek későbbi szerkesztéséhez.</p>
<p>A mellékelt ábra az automatikus kódkiegészítést mutatja be <code v-pre>(A)</code> a Microsoft Visual Studio Code ingyenes kódszerkesztő programjában amelyet ez a könyv ajánlja  HTML és  CSS való munkához. Lásd később a „Visual Studio Code telepítése” című részt ebben a fejezetben a Visual Studio telepítésével kapcsolatos utasításokért egyszerű telepítésért.</p>
<p>Más széles körben használt kódszerkesztők közé tartozik a Sublime Text, <a href="https://www.sublimetext.com/" target="_blank" rel="noopener noreferrer">www.sublimetext.com<ExternalLinkIcon/></a>, ami 99 dollárba kerül egy ingyenes időszak után értékelés idő nélkül korlátoz, de emlékeztetőkkel ujításhoz; UltraEdit, <a href="https://www.ultraedit.com" target="_blank" rel="noopener noreferrer">www.ultraedit.com<ExternalLinkIcon/></a>, amely ingyenes 30 napos próbaverziót kínál majd 79,95 dollárba kerül éves előfizetésre vagy 149,95 dollár az állandó verzióért; és Jegyzettömb ++, <a href="https://www.notepad-plus-plus.org" target="_blank" rel="noopener noreferrer">www.notepad-plus-plus.org<ExternalLinkIcon/></a>, amely ingyenes de csak Windowson fut.</p>
<figure><img src="@source/demo/images/1-fejezet/11.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="weboldal-keszito" tabindex="-1"><a class="header-anchor" href="#weboldal-keszito"><span>Weboldal készítő</span></a></h3>
<p>A webhelykészítők egyszerűsített eszközök, amelyek lehetővé teszik, hogy készítsen egy webhelyet előre megtervezett elmek behúzásával egy testreszabható sablonra. Weboldal készítők jók azoknak az embereknek vagy kisvállalkozásoknak, akik arra vágynak, hogy gyorsan és kódolás nélkül készítsenek egy weboldalt.	A széles körben használt webhely-készítők közé tartozik a Weebly, www.weebly.com; Wix, www.wix.com; és a Squarespace, www.squarespace.com. A legtöbb webhelykészítő kínál webhost-ot, így nem kell külön webhost-ot találnia.</p>
<p>Sok webhost hozzáférést biztosít egy vagy több webhelyhez építő számára. Tehát ha már van webhost-ja, nézze meg, hogy van-e webhelykészítőt kínálata.</p>
<h3 id="tartalomkezelo-rendszerek" tabindex="-1"><a class="header-anchor" href="#tartalomkezelo-rendszerek"><span>Tartalomkezelő rendszerek</span></a></h3>
<p>A tartalomkezelő rendszer, rövidítve CMS, a
webalapú alkalmazások létrehozásához, kezeléséhez és weboldalak, blogbejegyzések és képek közzétételéhez. A CMS-ek webhelysablonok széles választékát kínálja, amelyek számos választási lehetőséget kínálnak dizájnról és funkcionalitásról.	Eszközöket is biztosítanak
tartalmak kezelésére és közzétételére, ideértve a postok ütemezést, a közösségi média integrálása és a SEO optimalizálás.</p>
<p>A széles körben használt CMS platformok közé tartozik a WordPress, a
www. wordpress.com; Joomla, www.joomla.org; és Drupal, www.drupal.org.</p>
<h3 id="grafikai-eszkozok" tabindex="-1"><a class="header-anchor" href="#grafikai-eszkozok"><span>Grafikai eszközök</span></a></h3>
<p>A weboldalához megfelelő képfájlok létrehozásához egy grafikai-manipuláló eszközre lesz szüksége. Ez a könyv a
GIMP, a GNU Image Manipulation Program-ot ajánlja, amely ingyenes és Windows, macOS és Linux rendszeren fut. Ez elérhető a www.gimp.org webhelyről; lássa a „GIMP telepítése” részt, később ebben a fejezetben.</p>
<p>Ha professzionálisan dolgozik grafikával, akkor már lehet rendelkezik megfelelő grafikus manipulációs eszközzel, például Adobe-val, Photoshop-val vagy Adobe Illustrator-el Az ilyen eszközök megfelelő képfájlokat képes létrehozni webhelye számára.	Adobe, a www.adobe.com kínál Photoshop-ot és Illustrator-t mint egyalkalmazásos előfizetés, vagy akár Creative Cloud csomagjához való előfizetés ami több mint 20 alkalmazást tartalmaz. Különleges árak érhetőek el diákok, tanárok, iskolák és egyetemek számára.</p>
<p>Ha Windows rendszert használ, érdemes lehet kipróbálni a beépített Paint alkalmazás; Ha nem bizonyul megfelelőnek, akkor ki próbálhatja az ingyenes Paint.net ami a www.getpaint.net webhelyről elérhető. Ha macOS-el rendelkezik akkor érdemes lehet kísérletezni a beépített Előnézet és Fotó alkalmazással. Linux esetén menjen egyenesen a GIMP-hez.</p>
<h2 id="felkeszules-a-webhelyed-elkeszitesere" tabindex="-1"><a class="header-anchor" href="#felkeszules-a-webhelyed-elkeszitesere"><span>Felkészülés a webhelyed elkészítésére</span></a></h2>
<p>A webhely létrehozása előtt előfordulhat, hogy ki kell választania egy webhost-ot, amelyen hostolhatja a webhelyét, regisztráljon egy domain nevet, amely alatt fog megjelenik a weben, és szerezzen be és alkalmazzon Secure Sockets Layer-t, SSL-t a webhely és a látogatók közötti forgalom biztonságához.</p>
<p>Az Ön helyzetétől függ, hogy milyen lépéseket kell megtennie. Ha Ön vagy cége már rendelkezik web hostinggal, hagyja ki ezt a lépést; hasonlóképpen hagyja ki a domain név és az SSL lépéseit, ha már rendelkezik velük. Ha készen áll, lépjen tovább a következő szakaszra: „A Visual Studio Code telepítése”.</p>
<h3 id="web-host-valasztasa" tabindex="-1"><a class="header-anchor" href="#web-host-valasztasa"><span>Web host választása</span></a></h3>
<p>Ha Ön vagy cége nem rendelkezik webhost-tal, először válassza ki a megfelelőt, és regisztráljon az Ön igényeinek megfelelő hosting tervre.</p>
<p>Számos webhost áll rendelkezésre, amelyeket másodpercek alatt megtalálhatóak az interneten való kereséssel. A webhostok értékelésekor általában érdemes a következő funkciókat figyelembe venni:</p>
<ul>
<li>
<p><strong>Ár.</strong> Az ár segítségével válasszon ki egy olyan webhostot és csomagot, amelyet megengedhet magának, majd alkalmazza a listában lévő többi tényezőt, hogy értékelje a hostot és csomagját. Ne csak az ár alapján ítélje meg a csomagot.</p>
</li>
<li>
<p><strong>Üzemidő és megbízhatóság.</strong> Webhelyének működőképesnek és a hét minden napján elérhetőnek kell lennie ahhoz, hogy kiszolgálja a látogatókat. Válasszon olyan internetes tárhelyet, amely magas százalékos üzemidőt kínál – a 99,9 százalékos üzemidőt tekintjük minimum üzemidőnek dedikált hostoknak – és nagy megbízhatóságnak</p>
</li>
<li>
<p><strong>Vevőszolgálat.</strong> Győződjön meg arról, hogy a webhost-ja erős ügyfélszolgálatot kínál az összes használni kívánt csatornán keresztül – e-mailes támogatás, telefonos támogatás és élő csevegés</p>
</li>
<li>
<p><strong>Teljesítmény és sebesség.</strong> A felhasználók könnyen frusztrálttá válnak a lassan betöltődő webhelyek miatt, szóval győződjön meg, hogy webhost-ja gyors betöltési sebességet biztosít. Olyan webhost-ot keressen, amely tartalomszolgáltató hálózatokat használ, röviden CDN. A CDN egy földrajzilag elosztott szerverrendszer, amely webtartalmat szállít a látogatók földrajzi elhelyezkedésük alapján, ahelyett, hogy az összes tartalmat egy központi pontról szállítanák, amelyek földrajzilag távol lehet egyes látogatóktól.</p>
</li>
<li>
<p><strong>Méretezhetőség.</strong> Győződjön meg arról, hogy a webhost-ja lehetővé teszi a tárhely-terv frissítését, mivel webhelye és annak forgalma nőhet. Ez a méretezhetőség segít elkerülni, hogy kinője a webhost-ját, és ne kelljen másik hostra váltani, ami jelentős és költséges felfordulás.</p>
</li>
<li>
<p><strong>Biztonság, biztonsági mentés és helyreállítás.</strong> A webtárhelynek biztosítania kell az SSL-tanúsítványokat, a rosszindulatú programok észlelését és tűzfalakat a webhelyek biztonságának megőrzése érdekében. A hostnak biztonsági mentési beállítási és elfelejtési funkciókat is kell kínálnia, hogy megőrizze az Ön adatait a webhelyen sérülés vagy hardverhiba esetén, valamint könnyen használható eszközök weboldala visszaállításához a legutóbbi elérhető mentés alapján.</p>
</li>
</ul>
<h3 id="domain-nev-regisztralasa" tabindex="-1"><a class="header-anchor" href="#domain-nev-regisztralasa"><span>Domain név regisztrálása</span></a></h3>
<p>Ha nem rendelkezik domain névvel a webhelyéhez, most itt az ideje beszerezni egyet. Nyisson meg egy ablakot a domain regisztrálásához, keressen egy elérhető domain nevet ami Önnek megfelel, és regisztrálja. Az alábbi ábra a Pair Domains regisztráló felületét mutatja be.</p>
<p>Jelen állás szerint ez az öt vezető domain vezetők:</p>
<ul>
<li>GoDaddy, <a href="https://www.godaddy.com" target="_blank" rel="noopener noreferrer">www.godaddy.com<ExternalLinkIcon/></a></li>
<li>Domain.com, <a href="https://www.domain.com" target="_blank" rel="noopener noreferrer">www.domain.com<ExternalLinkIcon/></a></li>
<li>Namecheap, <a href="https://www.namecheap.com" target="_blank" rel="noopener noreferrer">www.namecheap.com<ExternalLinkIcon/></a></li>
<li>Google Domains, <a href="https://domains.google" target="_blank" rel="noopener noreferrer">https://domains.google<ExternalLinkIcon/></a></li>
<li>Porkbun, <a href="https://www.porkbun.com" target="_blank" rel="noopener noreferrer">www.porkbun.com<ExternalLinkIcon/></a></li>
</ul>
<p>Mindezek a domainregisztrátorok a legfelső szintű szolgáltatások széles skáláját kínálják domainek vagy TLD-k. Ezek a TLD-k széleskörben elérhetőek .com, .org és .net – három az eredeti hat TLD-ből, amelyet a 1980-as években készítettek – újabb TLD-k, mint például az .art, .biz és .shop. Az árak eltérően változnak, a legnépszerűbb TLD-k messze a legdrágábbak.</p>
<figure><img src="@source/demo/images/1-fejezet/13.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>A különböző TLD-k azokra a szervekre korlátozódnak, amelyek megfelelnek
minősítési kritériumoknak. Például a .gov TLD az Egyesült Államok kormányzati szervei és szervezetei számára fenntartott, a .mil TLD az Egyesült Államok hadseregének van fenntartva, és az .edu
TLD az akkreditált középiskola utáni oktatás számára van fenntartva intézmények számára az Egyesült Államokban. Kiábrándítóan, a .cat TLD a katalán nyelvészeti és kulturális közösség számára van, de a .dog TLD, a .pet TLD, és az .animal TLD mindenki számára nyitva áll.</p>
<h3 id="valassza-ki-az-ssl-tanusitvany-tipusat" tabindex="-1"><a class="header-anchor" href="#valassza-ki-az-ssl-tanusitvany-tipusat"><span>Válassza ki az SSL-tanúsítvány típusát</span></a></h3>
<p>Az SSL a Secure Sockets Layer rövidítése, a hálózati biztonsági protokoll, egy titkosított kapcsolat a webböngésző és a webkiszolgáló között, annak biztosítására, hogy a közöttük átadott adatok bizalmasak és biztonságosak maradnak még akkor is, ha azokat útközben elfogják. Hogy megbizonyosodjon arról böngészők biztonságosan hozzáférhetnek webhelyéhez, ahhoz szüksége lesz
egy SSL-tanúsítványra, és annak alkalmazására a webhely domainjére.</p>
<p>Az SSL-tanúsítvány beszerzésének két fő lehetősége van. Először is szerezhet be egy SSL-tanúsítványt a domain
regisztrátornál, amikor regisztrálja a webhely nevét. Második, sok webhost kínál SSL-tanúsítványokat az Ön domainjéhez amit a webhost szerverein hostol. A harmadik lehetőség az SSL beszerzésére
egy másik domain regisztrátortól, de ez a körkörös megközelítés ritkán előnyös.</p>
<p>Általában azt szeretné meg tudni, hogy webhost-ja milyen SSL-tanúsítványokat ajánl, mielőtt fizetne egy SSL-tanúsítványért a domain regisztrátorától.	Különféle típusú SSL-tanúsítványok állnak rendelkezésre, mint például a
következő:</p>
<ul>
<li>
<p>A próbatanúsítvány, egy idő korlátozott tanúsítvány, amely lehetővé teszi annak tesztelését, hogy a tanúsítvány megfelel-e az Ön igényeinek; ha igen, akkor vásárolhat egy másik tanúsítványt.</p>
</li>
<li>
<p>Egy pozitív tanúsítvány lehetővé teszi a titkosítást a webhely adatai számára, és viszonylag kicsi az érintett fél garanciája, $10.000.</p>
</li>
<li>
<p>Az alaptanúsítvány szintén lehetővé teszi a titkosítást, de sokkal magasabb garanciával rendelkezik, $250 000.</p>
</li>
<li>
<p>A pozitív helyettesítő karakter tanúsítvány lehetővé teszi a titkosítást több aldomainnek a domainen belül, így nem kell külön tanúsítványt venni minden aldomain számára.</p>
</li>
</ul>
<h2 id="visual-studio-telepitese" tabindex="-1"><a class="header-anchor" href="#visual-studio-telepitese"><span>Visual Studio telepítése</span></a></h2>
<p>Ahogy azt a &quot;Weboldalak létrehozásához szükséges eszközök megértése&quot; fejezetben már korábban ismertettük, a kód szerkesztője a mindennapi eszközöd az HTML dokumentumok és CSS fájlok létrehozásához és szerkesztéséhez. Számos különböző kód szerkesztő elérhető, de ez a könyv a Visual Studio Code-ot javasolja, egy erőteljes, de ingyenes kód szerkesztőt a Microsofttól. A Visual Studio Code Windows-on, macOS-en és Linux-on fut, az egyes platformokon hasonló felülettel.</p>
<p>A Microsoft két különálló verziót kínál a Visual Studio Code-ból. A Stabil verziót általában
azt fogod telepíteni. Az Insiders verzió új funkciókat és javításokat tartalmazhat, és nem biztos, hogy teljesen stabil.</p>
<h3 id="telepites-visual-studio-code-lepesei" tabindex="-1"><a class="header-anchor" href="#telepites-visual-studio-code-lepesei"><span>Telepítés Visual Studio Code lépései:</span></a></h3>
<ol>
<li>
<p>Egy webböngészőben látogass el a code. visualstudio.com oldalra. A Visual Studio Code weboldalának főoldala jelenik meg.</p>
</li>
<li>
<p>Kattints a Stabil Verzió Letöltése gombra. Ez a gomb megjeleníti a számítógéped operációs rendszerét, amelyet az oldal automatikusan érzékel. A Ha más operációs rendszerrel rendelkező számítógépre szeretnéd letölteni a Visual Studio Code-ot, vagy ha az Insiders verziót szeretnéd letölteni a Stabil helyett, kattints a legördülő nyílra ( ), majd kattints a Letöltés ( ) gombra az operációs rendszer és verzió kiválasztásához. A letöltés megkezdődik.</p>
</li>
<li>
<p>Nyisd meg a böngésző Letöltések paneljét vagy ablakát. Például a Microsoft Edge-ben kattints a Letöltések ( ) ikonra, ha a Letöltések panel nem nyílik meg automatikusan.</p>
</li>
<li>
<p>Nyisd meg a letöltött fájlt. Például a Microsoft Edge-ben kattints a Letöltött fájl megnyitása gombra a letöltött fájl neve alatt. Windows-on az installáló automatikusan fut.</p>
</li>
<li>
<p>Az Engedélyezési Szerződés képernyőn kattints az Elfogadom gombra (átvált ), ha folytatni szeretnéd a telepítést.</p>
</li>
<li>
<p>Kattints a Következő gombra.</p>
</li>
<li>
<p>Az Válaszd ki a telepítési helyet képernyőn kattints a Következő gombra (nem látható).</p>
</li>
<li>
<p>Az Startmenü Mappa Kiválasztása képernyőn kattints a Következő gombra (nem látható). Megjelenik a Válassz további feladatokat képernyő.</p>
</li>
<li>
<p>Válaszd ki az Asztali ikon létrehozása opciót ( ), ha asztali ikont szeretnél létrehozni a Visual Studio Code-hoz.</p>
</li>
<li>
<p>Válaszd ki a Két &quot;Megnyitás a Kóddal&quot; művelet hozzáadása jelölőnégyzetet ( ), hogy könnyen megnyithasd a fájlokat és mappákat a Visual Studio Code-ban a Fájlkezelőből. Részletekért lásd a második tippet.</p>
</li>
<li>
<p>Válaszd ki a Kód regisztrálása szerkesztőként támogatott fájltípusokhoz opciót ( ), hogy regisztráld a Visual Studio Code-ot a Windows rendszerrel olyan alkalmazásként, amely meg tudja nyitni például az HTML és CSS fájlokat.</p>
</li>
<li>
<p>Válaszd ki az Elérési útvonalhoz hozzáadása (újraindítás szükséges) opciót ( ), hogy hozzáadd a Visual Studio Code-ot a Windows elérési útvonalához. Ez megmondja a Windowsnak, hol található a Visual Studio Code.</p>
</li>
<li>
<p>Kattints a Következő gombra, majd a Telepítésre kész képernyőn ismét kattints a Következő gombra. A telepítés fut. Megjelenik a Visual Studio Code telepítővarázsló befejezése képernyő.</p>
</li>
<li>
<p>Kattints a Visual Studio Code indítása gombra ( átvált ), ha nem szeretnéd elindítani a Visual Studio Code-ot.</p>
</li>
<li>
<p>Kattints a Befejezés gombra. A Telepítővarázsló bezárul. A Visual Studio Code megnyílik, és beállíthatod, ahogy a következő szakaszban magyarázzák.</p>
</li>
</ol>
<div style="text-align:center">
<p><img src="@source/demo/images/1-fejezet/14.1.oldal.png" alt="" loading="lazy">
<img src="@source/demo/images/1-fejezet/14.2.oldal.png" alt="" loading="lazy">
<img src="@source/demo/images/1-fejezet/15.1.oldal.png" alt="" loading="lazy">
<img src="@source/demo/images/1-fejezet/15.2.oldal.png" alt="" loading="lazy">
<img src="@source/demo/images/1-fejezet/15.3.oldal.png" alt="" loading="lazy"></p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Tipp</p>
<p><strong>Hogyan telepíthetem a Visual Studio Code-ot macOS-en?</strong>
Kattints duplán a letöltött Zip fájlra a kicsomagolásához, majd húzd át a Visual Studio Code alkalmazásfájlt az Alkalmazások mappába.</p>
<p><strong>Mit csinálnak a ” Megnyitás a Kóddal” opciók?</strong>
A ”Megnyitás a Kóddal” művelet hozzáadása a Windows Fájlkezelő fájlokra kattintva jobb-kattintással nyitja meg a Visual Studio Code által támogatott fájltípusokat, majd a Megnyitás a Kóddal lehetőséget választva a kontextusmenüből. Hasonlóan, a <strong>Megnyitás kóddal</strong> művelet hozzáadása a Windows Fájlkezelő mappáira jobb-kattintva lehetővé teszi a mappák megnyitását a Visual Studio Code-ban.</p>
</div>
<h2 id="talalkozas-es-konfiguralas-a-visual-studio-code-dal" tabindex="-1"><a class="header-anchor" href="#talalkozas-es-konfiguralas-a-visual-studio-code-dal"><span>Találkozás és konfigurálás a Visual Studio Code-dal</span></a></h2>
<p>Amikor először futtatod a Visual Studio Code-ot, az alkalmazás általában megjeleníti a <strong>Kezdés a Visual Studio Code-dal</strong> képernyőt, amely végigvezet néhány kezdeti beállítási lépésen. Később visszatérhetsz a <strong>Kezdés a Visual Studio Code-dal</strong> képernyőre, ha szeretnéd; vagy alternatívaként használhatod az alkalmazás más beállításaihoz való hozzáférés más módjait is, hogy az alkalmazást úgy konfigurálhasd, ahogy szeretnéd.</p>
<p>Az első változtatás, amit valószínűleg szeretnél, az a téma lesz, amely az Visual Studio Code általános megjelenését irányítja. Az alkalmazás tartalmaz különböző sötét és világos témákat; harmadik féltől származó témák is elérhetőek.</p>
<h3 id="inditsd-el-a-visual-studio-code-ot-es-talalkozz-a-udvozlo-kepernyovel" tabindex="-1"><a class="header-anchor" href="#inditsd-el-a-visual-studio-code-ot-es-talalkozz-a-udvozlo-kepernyovel"><span>Indítsd el a Visual Studio Code-ot és találkozz a Üdvözlő Képernyővel</span></a></h3>
<p>Kezdd a Visual Studio Code indításával a számítógéped operációs rendszerének szokásos módján. Például, Windows-on kattints a Start gombra ( ), hogy megjelenítse a Start menüt, majd kattints a Visual Studio Code-ra ( ).</p>
<p>Amikor először indítod a Visual Studio Code-ot, az alkalmazás automatikusan megjeleníti az Üdvözlő képernyőt, amely ösztönzi, hogy válassz néhány kulcsfontosságú konfigurációs beállítást. Például kattinthatsz a <strong>Kezdés a VS Code-dal</strong> lehetőségre, hogy megjelenítse a Kezdés a VS Code-dal képernyőt, amely itt látható, és amely néhány kulcsfontosságú beállításra mutat linkeket. Ezeket a beállításokat később is konfigurálhatod, ahogy az alábbi alfejezetekben ismertetésre kerül.</p>
<figure><img src="@source/demo/images/1-fejezet/16.1.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="valassz-temat-a-visual-studio-code-hoz" tabindex="-1"><a class="header-anchor" href="#valassz-temat-a-visual-studio-code-hoz"><span>Válassz témát a Visual Studio Code-hoz</span></a></h3>
<p>Alapértelmezetten a Visual Studio Code a Dark+ témát használja, amely szemkímélő alacsony fényviszonyok között, de hajlamos túl sok tintát használni a könyvekben. Ahhoz, hogy megváltoztasd a témát, kattints a bal alsó sarkában található <strong>Kezelés</strong> gombra <code v-pre>(A, )</code>, hogy megjelenítse a ” Kezelés” felugró menüt, kattints a ” Témák” lehetőségre <code v-pre>(B)</code>, hogy megjelenítse a  <strong>Témák</strong>  folytatási menüt, majd kattints a <strong>Szín Téma</strong> lehetőségre <code v-pre>(C)</code>, amint itt látható.</p>
<p>A <strong>Szín Téma</strong> kiválasztásánál nyomd le a fel- és lebillentyűket a témák listájának fel- és lemozgatásához. A Visual Studio Code előnézetet jelenít meg a kiválasztott témáról. Amikor megtalálod a kívánt témát, nyomd le az Enter billentyűt a alkalmazásához. Innen kezdve ez a könyv a Light+ V2 (Kísérleti) témát használja az olvashatóság érdekében.</p>
<figure><img src="@source/demo/images/1-fejezet/16.2.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="a-kulcselemek-azonositasa-a-visual-studio-kodablakkal" tabindex="-1"><a class="header-anchor" href="#a-kulcselemek-azonositasa-a-visual-studio-kodablakkal"><span>A kulcselemek azonosítása a Visual Studio kódablakkal:</span></a></h3>
<p>Az Visual Studio Code ablakban az alábbi kulcsfontosságú elemek találhatók:</p>
<ul>
<li>
<p><strong>Tevékenység Sáv (D).</strong> Ez a függőleges sáv az ablak bal oldalán gyors hozzáférést biztosít több különböző panelhez, amelyek közül egyet egyszerre megjeleníthetsz az Elsődleges Oldalsávban.</p>
</li>
<li>
<p><strong>Menü ikon (E).</strong> Amikor a menüsor nincs megjelenítve, kattints a Menü ( ) gombra, hogy megjelenítse a menülistát, majd kattints arra a menüre, amelyet meg szeretnél nyitni.</p>
</li>
<li>
<p><strong>Elsődleges Oldalsáv (F).</strong> Ez a terület, amely alapértelmezés szerint az ablak bal oldalán jelenik meg, megjeleníthet több panelt is, például a Közvetlen hozzáférésű panelt, amely a közelben látható illusztrációban. Egyik panelről a másikra a Tevékenység Sávban található gombokra kattintva válthatsz. Szükség szerint megjelenítheted vagy elrejtheted az Elsődleges Oldalsávot.</p>
</li>
<li>
<p><strong>Másodlagos Oldalsáv (nem látható).</strong> Ez a terület az ablak jobb oldalán további információkat jeleníthet meg a szerkesztett kódhoz. Például megjelenítheted a kódszerkezet vázlatát. Szükség szerint megjelenítheted vagy elrejtheted a Másodlagos Oldalsávot.</p>
</li>
<li>
<p><strong>Szerkesztő (G).</strong> Ez a fő terület, ahol szerkesztheted a fájlokat.</p>
</li>
<li>
<p><strong>Fül sáv (H).</strong> A Fül sáv minden nyitott dokumentumhoz egy lapot jelenít meg. Kattinthatsz a lapra annak a dokumentumnak a megjelenítéséhez, amelyet szeretnél.</p>
</li>
<li>
<p><strong>Panel (I).</strong> Ez az ablak alján található terület lapokkal, amelyek lehetővé teszik különböző elemek megjelenítését: Problémák, Kimenet, Terminál és Hibakereső konzol. Szükség szerint megjelenítheted vagy elrejtheted a Panelt.</p>
</li>
<li>
<p><strong>Állapot sáv (J).</strong> Ez a keskeny vízszintes sáv az ablak alján információkat jelenít meg a Szerkesztő aktuális állapotáról, beleértve a nyelv módot, a sor- és oszlopszámokat, valamint a észlelt problémák számát.</p>
</li>
</ul>
<figure><img src="@source/demo/images/1-fejezet/17.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="ismerkedes-a-visual-studio-code-al-es-konfiguralasa-folytatas" tabindex="-1"><a class="header-anchor" href="#ismerkedes-a-visual-studio-code-al-es-konfiguralasa-folytatas"><span>Ismerkedés a Visual Studio Code-al és konfigurálása (folytatás)</span></a></h2>
<p>Visual Studio Code rendkívül jól konfigurálható felülettel rendelkezik, amely lehetővé teszi, hogy csak azokat az elemeket jelenítse meg, amelyeket éppen szeretne látni. Az Activity Bar lehetővé teszi számára, hogy a kívánt panelt megjelenítse a Primary Side Bar-ban, de elrejtheti a Primary Side Bar-t, amikor a Kódolásra szeretne koncentrálni.</p>
<p>A Visual Studio Code számos beállítást kínál, amelyekkel vezérelheti az alkalmazás működését. Ez a rész bemutatja, hogyan állíthatja be a két legfontosabb beállítást, az Automatikus Mentést és a Betűméretet.</p>
<p>##Változtassa meg aVisual Studio Code elrendezését
Az ablak jobb felső sarkában található négy gomb lehetővé teszi a Visual Studio Code alkalmazás elrendezésének módosítását:</p>
<ul>
<li>Az Elsődleges Oldalsáv váltása (A, ). Kattintson erre a gombra az Elsődleges Oldalsáv megjelenítésének váltásához. Vagy nyomja le az CTRL+B billentyűt Windows vagy Linux rendszeren, vagy a CMD+B billentyűt Mac rendszeren.</li>
<li>A Panel váltása (B, ). Kattintson erre a gombra a Panel megjelenítésének váltásához. Vagy nyomja le az CTRL+J billentyűt Windows vagy Linux rendszeren, vagy a CMD+J billentyűt Mac rendszeren.</li>
<li>A Másodlagos Oldalsáv váltása (C, ). Kattintson erre a gombra a Másodlagos Oldalsáv megjelenítésének váltásához. Vagy nyomja le az CTRL+ALT+B billentyűt Windows vagy Linux rendszeren, vagy a CMD+OPTION+B billentyűt Mac rendszeren.</li>
<li>Az elrendezés testreszabása (D, ). Kattintson erre a gombra az Elrendezés testreszabása ablak megjelenítéséhez, amely a közelben látható.</li>
</ul>
<p>A Testreszabás elrendezése ablak négy szakaszt tartalmaz: a Láthatóság szakaszt, az Elsődleges Oldalsáv Pozíció szakaszt, a Panel Igazítás szakaszt és a Módok szakaszt.</p>
<p>A Láthatóság szakaszban (E) kiválaszthatja, hogy mely elemeket kívánja megjeleníteni, és melyeket elrejteni. Mozgassa az egeret az elem fölé, amelyet meg szeretne jeleníteni vagy elrejteni. A Megjelenített ikon (F, ) vagy a Rejtett ikon (G, ) megjelenik az elem jobb oldalán. Kattintson erre az ikonra az elem megjelenítése és elrejtése közötti váltáshoz. Az Elsődleges Oldalsáv Pozíció szakaszban (H) válassza ki a <strong>Left</strong> ( ) vagy <strong>Right</strong> ( ) lehetőséget az Elsődleges Oldalsáv megjelenési oldalának irányításához. Az alapértelmezett beállítás a Left.
A Panel Igazítás szakaszban (I) válassza ki a <strong>Left</strong> ( ), <strong>Right</strong> ( ), <strong>Center</strong> ( ) vagy <strong>Justify</strong> ( ) lehetőséget szükség szerint.</p>
<p>A Módok szakaszban (J) válassza ki a <strong>Fullscreen</strong> ( ) lehetőséget a Teljes képernyő módra váltáshoz; kattintson a <strong>Zen</strong> ( ) lehetőségre a Zen módra váltáshoz, amely minimalizálja a Visual Studio Code felületét; vagy kattintson a <strong>Centered Layout</strong> ( ) lehetőségre a Központozott elrendezés módra váltáshoz. Az ezek közül bármelyik vagy az összes három módot alkalmazhatja.</p>
<p>Amikor befejezte a beállítások kiválasztását a Testreszabás elrendezése ablakban, kattintson a <strong>Close</strong> ( ) gombra az ablak bezárásához.</p>
<p><img src="@source/demo/images/1-fejezet/18.1.oldal.png" alt="" loading="lazy">
<img src="@source/demo/images/1-fejezet/18.2.oldal.png" alt="" loading="lazy"></p>
<h3 id="a-weboldalak-letrehozasara-valo-felkeszules" tabindex="-1"><a class="header-anchor" href="#a-weboldalak-letrehozasara-valo-felkeszules"><span>A weboldalak létrehozására való felkészülés</span></a></h3>
<p>Auto Save és Betűméret Konfigurálása A Visual Studio Code-ban kattintson a <strong>Menu</strong> (K, ) gombra, hogy megjelenítse a menülistát, majd kattintson a <strong>Fájlra</strong> a Fájl menü megnyitásához. Kattintson a <strong>Preferences</strong> a Beállítások almenü megnyitásához, majd kattintson a <strong>Beállításokra</strong>.</p>
<p>A Beállítások ablak megjelenik. A Gyakran használt beállítások kategória általában elsőként jelenik meg. Ha egy másik kategória jelenik meg, kattintson a <strong>Gyakran használt</strong> (L) lehetőségre.</p>
<p>Kattintson a Fájlok: Automatikus mentés (M, ) lehetőségre, majd kattintson az afterDelay-re. Ez a beállítás lehetővé teszi, hogy a Visual Studio Code automatikusan mentse a változtatásait egy rövid késleltetés után. Ebben a könyvben feltételezzük, hogy az afterDelay beállítást használja. A más elérhető beállítások: off, onFocusChange, amely akkor menti el a változtatásokat, amikor a fókuszt egy másik részre mozgatja a Visual Studio Code-ban; és az onWindowChange, amely akkor menti el a változtatásokat, amikor a fókuszt egy másik ablakra mozgatja.</p>
<p>Kattintson az <strong>Editor: Font Size</strong> (N) lehetőségre, majd írja be az editorban használni kívánt betűméretet.</p>
<p>Opcionálisan kattintson az <strong>Editor: Font Size</strong> (O) lehetőségre, majd írja be az editorban használni kívánt betűtípust. A Visual Studio Code az első betűt használja — például a Consolas a példában — ha elérhető, és ha szükséges, a következő nevű betűkra lép át; ha egyik nevű betű sem elérhető, a generikus betűtípusra — ebben az esetben a monospace-re — lép át. Ha a betűtípus neve tartalmaz szóközt, akkor a példában látható módon idézőjelek között adja meg, például 'Courier New'.</p>
<p>Ahogy láthatja, a Visual Studio Code rendelkezik számos funkcióval. Végigböngészheti azokat, ha a bal oldali ablaktáblázatban kattint a kategóriákra, vagy keresse meg a <strong>Search settings</strong> (P) gombra kattintva, majd gépelje be a keresési kifejezését. Amikor befejezte a beállítások konfigurálását, kattintson a <strong>Close</strong> ( ) gombra az ablak bezárásához.</p>
<figure><img src="@source/demo/images/1-fejezet/19.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="gimp-telepitese" tabindex="-1"><a class="header-anchor" href="#gimp-telepitese"><span>GIMP telepítése</span></a></h2>
<p>A webhelyéhez megfelelő képfájlok létrehozásához szüksége lesz egy képszerkesztő alkalmazásra. Sok alkalmazás elérhető, néhány ingyenes, néhány pedig nem, így bőséges választási lehetősége van. A legjobb platformok közötti megoldás a GIMP, a GNU Képmanipulációs Program. A GIMP egy ingyenes és nyílt forráskódú képszerkesztő, amely Windows, macOS, Linux és más operációs rendszereken is fut.</p>
<h3 id="gimp-telepitese-windows-10-vagy-windows-11" tabindex="-1"><a class="header-anchor" href="#gimp-telepitese-windows-10-vagy-windows-11"><span>GIMP telepítése Windows 10 vagy Windows 11</span></a></h3>
<p>A GIMP telepítéséhez Windows 10 vagy Windows 11 rendszeren kattintson a <strong>Start</strong> ( ) gombra a Start menü megjelenítéséhez, majd kattintson a <strong>Microsoft Store</strong> ( ) gombra a Microsoft Store alkalmazás megnyitásához. Kattintson a <strong>Keresés alkalmazásokra, játékokra, filmekre és még többre</strong> az alkalmazásablak tetején, gépelje be a <strong>gimp</strong> (A) szót, majd nyomja le az Enter billentyűt. A keresési eredmények között kattintson a <strong>GIMP-re</strong>, majd kattintson a <strong>Telepítés</strong> (B) gombra.</p>
<p>Amint a GIMP telepítve van, elindíthatja a <strong>Start</strong> ( ) gombra kattintva, majd a <strong>GIMP</strong> ( ) gombra kattintva.</p>
<figure><img src="@source/demo/images/1-fejezet/20.1.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="gimp-telepitese-macos-rendszerre-ezen-iras" tabindex="-1"><a class="header-anchor" href="#gimp-telepitese-macos-rendszerre-ezen-iras"><span>GIMP telepítése macOS rendszerre Ezen írás</span></a></h3>
<p>Pillanatilag a GIMP nem elérhető az Apple Mac App Store-ban.</p>
<p>A GIMP telepítéséhez macOS rendszeren nyisson meg egy böngésző ablakot vagy lapot a GIMP webhelyén, a www.gimp.org (C) címen. Kattintson a Letöltések fülre (D) az ablak tetején, hogy megjelenítse a <strong>Letöltések</strong> oldalt, keressen rá a macOS jelenlegi stabil verziójára, majd kattintson vagy a <strong>GIMP letöltése BitTorrent segítségével</strong> (E) azért, hogy a GIMP-et a BitTorrent fájlmegosztási szolgáltatáson keresztül töltse le, vagy <strong>közvetlenül a GIMP letöltése</strong> (F) opcióra, hogy a GIMP webhelyéről tölthesse le. A gombok lehetőséget kínálnak az Apple Silicon és az Intel processzorokhoz való letöltésre; válasszon megfelelően a használt processzortípustól függően.</p>
<figure><img src="@source/demo/images/1-fejezet/20.2.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="felkeszules-a-weboldalak-letrehozasara" tabindex="-1"><a class="header-anchor" href="#felkeszules-a-weboldalak-letrehozasara"><span>Felkészülés a weboldalak létrehozására</span></a></h3>
<p>Ha megjelenik a &quot;Do You Want to Allow Downloads on www.gimp.org?&quot; párbeszédpanel, kattintson az <strong>Engedélyezés</strong> opcióra.</p>
<p>Amikor a letöltés befejeződik, kattintson a Letöltések mutatása gombra, majd kattintson a GIMP lemezképfájlra a Letöltések listájában. Egy Finder ablak megnyílik, amely a GIMP telepítőcsomag tartalmát mutatja. Húzza az GIMP ikont (G) az Alkalmazások mappához vezető gyorsikonra. A telepítés befejezése után kattintson a Nézet gombra a Nézet menü megnyitásához, majd kattintson a Eszköztár mutatása opcióra az eszköztár és az oldalsáv megjelenítéséhez. Menjen az oldalsáv Helyek szakaszába, és kattintson az <strong>Reject</strong> gombra a GIMP lemezképfájl kihúzásához. Ezt követően törölheti a fájlt a Letöltések mappából, ha nem kívánja megtartani.</p>
<p>Az alkalmazás telepítése után elindíthatja a GIMP-et a <strong>Launchpad</strong> ( ) gombra kattintva, majd a <strong>GIMP</strong> ( ) opcióra kattintva.</p>
<figure><img src="@source/demo/images/1-fejezet/21.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="gimp-telepitese-linux-rendszeren-tobb-lehetosege" tabindex="-1"><a class="header-anchor" href="#gimp-telepitese-linux-rendszeren-tobb-lehetosege"><span>GIMP telepítése Linux rendszeren Több lehetősége</span></a></h3>
<p>Van a GIMP telepítésére Linux rendszeren, beleértve a disztribúció szoftverkezelő alkalmazásának használatát. Ha a számítógépén Ubuntu fut, a legegyszerűbb megközelítés az, hogy nyisson meg egy terminál ablakot, és frissítse a csomaglistát a következő parancs kiadásával:</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Amint a csomaglista naprakész, telepítse a GIMP-et és minden szükséges függőséget a következő parancs kiadásával:</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> gimp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A telepítés befejezése után elindíthatja a GIMP-et vagy az alkalmazás menüből a GIMP kiválasztásával, vagy a terminál ablakban a gimp parancs kiadásával:</p>
<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre v-pre class="language-bash"><code>gimp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="telepitse-a-fobb-bongeszoket" tabindex="-1"><a class="header-anchor" href="#telepitse-a-fobb-bongeszoket"><span>Telepítse a főbb böngészőket</span></a></h2>
<p>A legtöbb operációs rendszer egyetlen böngészőalkalmazással érkezik – például a Windowshoz a Microsoft Edge böngésző, a macOS-hez az Apple Safari böngészője, a ChromeOS-hez pedig a Google Chrome böngészője. Bár ezek a böngészők mindegyike jól működik a webböngészés során, valószínűleg telepítenie kell a főbb böngészők teljes palettáját, hogy mindegyikkel tesztelhesse weboldalait, és megoldhassa a felmerülő kompatibilitási problémákat.</p>
<p>Jelen pillanatban a négy vezető böngésző a Chrome, a Mozilla Firefox, a Safari és a Microsoft Edge.</p>
<h3 id="mely-bongeszoket-hasznaljak-a-legszelesebb-korben" tabindex="-1"><a class="header-anchor" href="#mely-bongeszoket-hasznaljak-a-legszelesebb-korben"><span>Mely böngészőket használják a legszélesebb körben?</span></a></h3>
<p>A webböngészők széles választéka áll rendelkezésre, de 2023 tavaszán a Google Chrome uralja a piacot. A webböngészőhasználat lebontása (lásd a közeli kördiagramot) inkább illusztrációs, semmint pontos, de a legtöbb adat egyetért abban, hogy a Chrome a forgalom kétharmada és háromnegyede között mozog. Következik az Apple Safari körülbelül egyötödével a forgalomnak, főleg annak köszönhetően, hogy minden iPhone-on, iPaden és minden Mac-en megtalálható.</p>
<p>A Safari után a Microsoft Edge a Windows 10 és a Windows 11 része, a forgalom valamivel kevesebb mint 5 százalékával. A Mozilla Firefox 3 százalék körüli;  A Samsung Internet 2,5 százalék körüli, akárcsak az Opera. Más böngészők, mint például a Vivaldi és a már megszűnt Internet Explorer adják a forgalom fennmaradó 3 százalékát.</p>
<figure><img src="@source/demo/images/1-fejezet/22.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="hogyan-hasonlithato-ossze-a-chrome-a-safari-a-mozilla-firefox-es-a-microsoft-edge" tabindex="-1"><a class="header-anchor" href="#hogyan-hasonlithato-ossze-a-chrome-a-safari-a-mozilla-firefox-es-a-microsoft-edge"><span>Hogyan hasonlítható össze a Chrome, a Safari, a Mozilla Firefox és a Microsoft Edge?</span></a></h3>
<p>Mind a négy böngésző támogatja a funkciók széles skáláját, amelyek segítségével a felhasználók hatékonyan böngészhetnek az interneten és élvezhetik a webes tartalmakat. Mindegyik böngésző támogatja a HTML5-öt, a CSS3-at és a JavaScriptet. Mindegyik a következő hét fő funkciót kínálja:</p>
<ul>
<li>
<p><strong>Lapos böngészés.</strong> Egy ablakon belül több weboldalt is megnyithat külön lapokon.</p>
</li>
<li>
<p><strong>Könyvjelzők.</strong> Megjelölheti a weboldalakat, hogy gyorsan újra meglátogassa őket.</p>
</li>
<li>
<p><strong>Történelem.</strong> A böngésző automatikusan listát vezet a meglátogatott oldalakról, így könnyen visszatérhet azokra.</p>
</li>
<li>
<p><strong>Privát vagy &quot;inkognitó&quot; böngészés.</strong> Ez a mód lehetővé teszi az előzmények kikapcsolását, ha nem szeretné, hogy a böngésző nyomon kövesse azokat.</p>
</li>
<li>
<p><strong>Automatikus kitöltés.</strong> A böngésző tárolja az űrlapmezőkbe beírt adatokat – például címadatokat –, így a jövőbeni űrlapokon automatikusan kitöltheti ezeket a mezőket.</p>
</li>
<li>
<p><strong>Jelszótárolás.</strong> A böngésző lehetővé teszi a jelszavak biztonságos tárolását, így gépelés nélkül beírhatja azokat a weboldalakra.</p>
</li>
<li>
<p><strong>Kiterjesztések.</strong> A böngésző funkcionalitását bővítmények, harmadik féltől származó kiegészítők telepítésével bővítheti.</p>
</li>
</ul>
<p>Ezeken a funkciókon túl, amelyek vitathatatlanul nélkülözhetetlenek manapság az internetes böngészéshez, minden böngésző kínál saját funkciókat. Például:</p>
<ul>
<li>
<p>A Chrome szorosan integrálva van a Google szolgáltatásaival, például a Gmaillel és a Google Drive-val, és Chrome-alkalmazásokat, webes alkalmazásokat kínál, amelyek a Chrome böngészővel futnak.</p>
</li>
<li>
<p>A Microsoft Edge szoros integrációt kínál az Office 365-tel és más Microsoft-szolgáltatásokkal.</p>
</li>
<li>
<p>A Mozilla Firefox nagymértékben testreszabható felületet és erős adatvédelmi funkciókat kínál.</p>
</li>
<li>
<p>A Safari szorosan integrálódik az Apple eszközfunkcióival, például a Continuity szolgáltatással, amely lehetővé teszi a böngészést az egyik eszközön, és a folytatást egy másikon, valamint az Apple Keychain jelszókezelőjével. A Safari Reader módot is kínál a hirdetések és a megszakítások csökkentése érdekében a weboldalakon.</p>
</li>
</ul>
<h3 id="milyen-bongeszoket-erdemes-telepiteni" tabindex="-1"><a class="header-anchor" href="#milyen-bongeszoket-erdemes-telepiteni"><span>Milyen böngészőket érdemes telepíteni?</span></a></h3>
<p>Hacsak nincs komoly oka az ellenkezőjére, valószínűleg telepítenie kell mind a négy vezető böngészőt, --- Chrome-ot, a Safarit, a Mozilla Firefoxot és a Microsoft Edge-t --- a fejlesztő számítógépére. Ha mind a négy böngésző elérhető, akkor megbizonyosodhat arról, hogy weboldalai a számítógépek túlnyomó többségén megfelelően jelennek meg.
Telepítse a böngészőket, és válassza a konfigurációs lehetőségeket</p>
<h3 id="a-bongeszoket-a-kovetkezo-oldalakrol-toltheti-le" tabindex="-1"><a class="header-anchor" href="#a-bongeszoket-a-kovetkezo-oldalakrol-toltheti-le"><span>A böngészőket a következő oldalakról töltheti le:</span></a></h3>
<ul>
<li>
<p>Chrome: <a href="https://www.google.com/chrome" target="_blank" rel="noopener noreferrer">www.google.com/chrome<ExternalLinkIcon/></a></p>
</li>
<li>
<p>Safari: <a href="https://support.apple.com/downloads/safari" target="_blank" rel="noopener noreferrer">https://support.apple.com/downloads/safari<ExternalLinkIcon/></a></p>
</li>
<li>
<p>Firefox: <a href="https://www.mozilla.org/en-US" target="_blank" rel="noopener noreferrer">www.mozilla.org/en-US<ExternalLinkIcon/></a></p>
</li>
<li>
<p>Edge: <a href="https://www.microsoft.com/edge/download" target="_blank" rel="noopener noreferrer">www.microsoft.com/edge/download<ExternalLinkIcon/></a></p>
</li>
</ul>
<p>A böngészők telepítése elég egyszerű, de általában a következő hármat kell végrehajtania választási lehetőségek:</p>
<ul>
<li>
<p><strong>Meghatározza, hogy az új böngésző legyen az alapértelmezett böngésző a számítógépén.</strong> Például a Legyen a Firefox böngészője párbeszédpanelen kattintson a Lépés kihagyása lehetőségre, hogy elutasítsa a Firefox alapértelmezett böngészővé tételére vonatkozó ajánlatot.</p>
</li>
<li>
<p><strong>Importálja-e a könyvjelzőket az aktuális böngészőből.</strong> A könyvjelzők importálása akkor hasznos, ha tartósan vagy félig állandóan vált egyik böngészőről a másikra, de ha több böngészőt telepít párhuzamos használathoz, érdemes külön könyvjelzőket tartani.</p>
</li>
<li>
<p><strong>Szinkronizálja-e a böngésző adatait az eszközök között.</strong> A könyvjelzők, jelszavak és beállítási adatok szinkronizálása minden olyan eszközön, amelyen egy adott böngészőt használ, nagy áldás lehet a fogyasztók számára. De amikor tesztelés céljából telepíti a böngészőket a számítógépére, érdemes lehet az adatokat szinkronizálatlanul tartani.</p>
</li>
</ul>
<h2 id="hozzon-letre-mappastrukturat-a-webhelyehez" tabindex="-1"><a class="header-anchor" href="#hozzon-letre-mappastrukturat-a-webhelyehez"><span>Hozzon létre mappastruktúrát a webhelyéhez</span></a></h2>
<p>A webhely tervezésének része a webhely mappaszerkezetének kiválasztása és megvalósítása. Általában ezt a mappastruktúrát a fejlesztői számítógépen – vagy a fejlesztői kiszolgálón – és az élő webszerveren is be kell állítani, hogy a fejlesztői környezetből fájlokat másolhasson az élő környezetbe anélkül, hogy módosítania kellene a mappák relatív elérési útját.</p>
<p>A webhelyekhez nincs hivatalos „jóváhagyott” mappastruktúra, így a mappákat úgy rendezheti el, ahogy Önnek és kollégáinak a legjobban megfelel. Ez a rész módszereket javasol a kezdéshez. Önnek és kollégáinak a legjobban megfelel. Ez a rész módszereket javasol a kezdéshez.</p>
<h3 id="a-webhely-altal-hasznalt-fajltipusok-listaja" tabindex="-1"><a class="header-anchor" href="#a-webhely-altal-hasznalt-fajltipusok-listaja"><span>A webhely által használt fájltípusok listája</span></a></h3>
<p>Kezdje azzal, hogy készítsen listát a webhelye által használt különböző típusú fájlokról. A következő típusokat széles körben használják, de az Ön webhelyén más típusok is lehetnek:</p>
<ul>
<li>HTML dokumentumok és CSS fájlok</li>
<li>Képek</li>
<li>Betűtípusok</li>
<li>Audio- és videofájlok</li>
<li>JavaScript script fájlok</li>
<li>A weboldallal kapcsolatos dokumentációs fájlok</li>
<li>Újrafelhasználható kódok és sablonok</li>
</ul>
<figure><img src="@source/demo/images/1-fejezet/24.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="hatarozza-meg-azokat-a-konyvtarakat-amelyekre-szuksege-lesz-webhelyenek" tabindex="-1"><a class="header-anchor" href="#hatarozza-meg-azokat-a-konyvtarakat-amelyekre-szuksege-lesz-webhelyenek"><span>Határozza meg azokat a könyvtárakat, amelyekre szüksége lesz webhelyének.</span></a></h3>
<p>Ezután döntse el, hogy hol tárolja ezeket az elemeket. Az 1‐1. táblázat és a közeli illusztráció a könyvtárak meglehetősen tipikus listáját mutatja, de valószínűleg létre kell hoznia a saját egyéni verzióját.</p>
<table>
<thead>
<tr>
<th style="text-align:left"></th>
<th style="text-align:left">1-1. táblázat: Tipikus könyvtárak a webhely szerkezetében</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>Mappa</strong></td>
<td style="text-align:left"><strong>Magyarázat</strong></td>
</tr>
<tr>
<td style="text-align:left">/</td>
<td style="text-align:left">A gyökérkönyvtár, a weboldal legfelső szintje. Ebbe a könyvtárba helyezi a fő index.html fájlt, weboldalait és egyéb lényeges fájlokat, például egy robots.txt fájlt. A többi könyvtár a gyökérkönyvtár gyermekei.</td>
</tr>
<tr>
<td style="text-align:left">/css</td>
<td style="text-align:left">A weboldalak stílusához használt CSS-fájlok tárolására szolgáló könyvtár. Ha sok CSS-je van fájlokat, fontolja meg alkönyvtárak létrehozását a szorosabb rendszerezés érdekében.</td>
</tr>
<tr>
<td style="text-align:left">/docs</td>
<td style="text-align:left">A dokumentációs fájlok tárolására szolgáló könyvtár.</td>
</tr>
<tr>
<td style="text-align:left">/download</td>
<td style="text-align:left">A webhely által letölthető fájlok tárolására szolgáló könyvtár.</td>
</tr>
<tr>
<td style="text-align:left">/fonts</td>
<td style="text-align:left">A webhely által használt betűtípusfájlok tárolására szolgáló könyvtár.</td>
</tr>
<tr>
<td style="text-align:left">/images</td>
<td style="text-align:left">A képfájlok tárolására szolgáló könyvtár.</td>
</tr>
<tr>
<td style="text-align:left">/includes</td>
<td style="text-align:left">A sablonok vagy újrafelhasználható kódok tárolására szolgáló könyvtár.</td>
</tr>
<tr>
<td style="text-align:left">/js</td>
<td style="text-align:left">A JavaScript szkriptfájlok tárolására szolgáló könyvtár.</td>
</tr>
<tr>
<td style="text-align:left">/vendor</td>
<td style="text-align:left">A webhely által használt, harmadik féltől származó keretrendszerek vagy könyvtárak tárolására szolgáló könyvtár. Lásd a 12. fejezetet.</td>
</tr>
</tbody>
</table>
<h3 id="allitsa-be-a-listat-az-on-igenyei-szerint" tabindex="-1"><a class="header-anchor" href="#allitsa-be-a-listat-az-on-igenyei-szerint"><span>Állítsa be a listát az Ön igényei szerint</span></a></h3>
<p>Ezt a listát tekintve megkérdezheti, hogy a hang- és videofájlok hova kerülnek a könyvtárstruktúrában. Mivel a könyvtárszerkezet nem rendelkezik ezekről a fájltípusokról, el kell döntenie a megfelelő helyet. Egyszerűen létrehozhat egy /audio könyvtárat az audiofájlokhoz és egy /videos könyvtárat a videofájlokhoz. De a címtárszerkezet kompaktságának megőrzése érdekében érdemes lehet létrehozni egy könyvtárat, például /media vagy /assets, amely alkönyvtárakat tartalmaz audio-, videó- és esetleg képek számára. Például:</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/media
    /audio
    /images
    /videos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Vagy:</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/assets
    /audio
    /images
    /videos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A videofájlok helyének kiválasztásakor ne feledje, hogy a videók nagy fájlméretei megnövelik a webszerver terhelését. Ha webhelye sok videót jelenít meg a látogatók számára, fontolja meg a terhek tehermentesítését a videofájlok CDN-en való tárolásával.</p>
<h3 id="hozza-letre-a-cimtarszerkezetet" tabindex="-1"><a class="header-anchor" href="#hozza-letre-a-cimtarszerkezetet"><span>Hozza létre a címtárszerkezetet</span></a></h3>
<p>Miután meghozta a tervezési döntéseket, létrehozhatja a könyvtárstruktúrát a számítógép operációs rendszerének szabványos parancsaival. Például:</p>
<ul>
<li>
<p><strong>Windows.</strong> Nyissa meg a Fájlkezelő ablakot, amely megmutatja azt a mappát, amelybe a gyökérkönyvtárat el fogja helyezni. Kattintson a jobb gombbal a nyitott területre a mappában, kattintson vagy jelölje ki az New elemet a helyi menüben, majd kattintson a gombra Mappa a folytatás menüben. Írja be a könyvtár nevét, és nyomja meg az ENTER gombot a név alkalmazásához. nyomja meg ismét az ENTER-t a könyvtár megnyitásához. Ezután alkönyvtárakat hozhat létre benne.</p>
</li>
<li>
<p><strong>macOS.</strong> Nyissa meg a Finder ablakot a mappába, amelybe a gyökérkönyvtárat helyezi. nyomja meg Control +  Kattintson vagy kattintson a jobb gombbal a helyi menü megjelenítéséhez, majd kattintson az Új mappa parancsra. Írja be a könyvtár nevét, és nyomja meg a Return-t az alkalmazáshoz. Kattintson duplán a könyvtárra a megnyitáshoz, és létrehozhat benne lévő alkönyvtárak.</p>
</li>
<li>
<p><strong>Linux.</strong> Nyisson meg egy terminálablakot, a cd paranccsal keresse meg a megfelelő könyvtárat, majd keresse meg a megfelelő könyvtárat az mkdir paranccsal hozza létre a gyökérkönyvtárat. Használja a chdir parancsot a könyvtár módosításához a gyökérkönyvtárat, majd hozzon létre benne alkönyvtárakat.</p>
</li>
</ul>
</div></template>


