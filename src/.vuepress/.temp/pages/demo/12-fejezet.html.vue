<template><div><h2 id="weboldalad-tovabbfejlesztese" tabindex="-1"><a class="header-anchor" href="#weboldalad-tovabbfejlesztese"><span>Weboldalad továbbfejlesztése</span></a></h2>
<p>Ebben a fejezetben megtudod, hogyan működnek a keresőmotorok, és hogyan végezheted el a weboldaladon a keresőoptimalizálást (SEO); hogyan azonosíthatod és csökkentheted az elérhetőségi problémákat a weboldalakon; és hogyan használhatod az élő fejlesztőeszközöket a problémák megoldására. Emellett megismered a tesztelőszerverek használatát és a gyors fejlesztéshez szükséges front‐end keretrendszereket is.</p>
<figure><img src="@source/demo/images/12-fejezet/bevezetoKep.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="a-keresomotorok-mukodesenek-megertese" tabindex="-1"><a class="header-anchor" href="#a-keresomotorok-mukodesenek-megertese"><span>A keresőmotorok működésének megértése:</span></a></h3>
<p>A keresőmotorok talán a legnépszerűbb eszközök az internet böngészésére. Egy webböngésző ablakot vagy fület nyitsz meg egy keresőmotorban, például a <strong>Google</strong> vagy a <strong>DuckDuckGo</strong>, majd beírod a keresésedet vagy néhány kulcsszót. A keresőmotor ezután visszaadja a keresési eredményeket, amelyeket böngészhet vagy követhet. A keresőmotorok általában négy lépést végeznek el. Az első három lépés a <strong>webről információgyűjtés</strong>, az <strong>információ indexelése</strong> és a <strong>keresési eredmények rangsorolása</strong>. Ezeknek a három lépésnek az alapjainak megértése segíthet abban, hogy optimalizáld weboldaladat a keresőmotorok számára.</p>
<h3 id="a-keresomotor-informaciot-gyujt-a-bongeszes-soran" tabindex="-1"><a class="header-anchor" href="#a-keresomotor-informaciot-gyujt-a-bongeszes-soran"><span>A keresőmotor információt gyűjt a böngészés során:</span></a></h3>
<p>A keresőmotor első lépése a <strong>&quot;kúszás&quot;</strong> (crawling) elnevezésű folyamat, amelynek során információt gyűjt az internetről. Automatizált keresési folyamatok, úgynevezett <strong>&quot;pók&quot;</strong>-ok (spiders), <strong>&quot;kúszók&quot;</strong> (crawlers), vagy &quot;kereső bot&quot;-ok (search bots) járják be az internetet, kezdve egy ismert URL-ek listájáról, majd az ezeken az oldalakon található linkeket követve fedezik fel más oldalakat.</p>
<p>Amikor egy pók eléri egy webhelyet, első lépésként megtalálja és elolvassa a <strong>robots.txt</strong> nevű fájlt, amely utasításokat tartalmaz a webhely bejárásához. A 'robots.txt' fájl tartalmazhat egy olyan mappalistát, amelyet a póknak figyelmen kívül kell hagynia. A fájl blokkolhat bizonyos pókokat is, hogy megakadályozza a túl nagy forgalom generálását, ami túlterhelné a webszervert. További információkért a 'robots.txt' fájl használatáról és létrehozásáról lásd a <strong>&quot;Útmutató a kereső pókokhoz egy <strong>robots.txt</strong> fájllal&quot;</strong> című szakaszt később ebben a fejezetben.</p>
<p>A 'robots.txt' fájlban található utasításoknak megfelelően a pók felfedezi a webhelyet, követve mind a belső linkeket - az oldalon található linkeket, amelyek más oldalakra vezetnek - mind az külső linkeket, amelyek más webhelyekre vezetnek. A pók naplózza az általa felfedezett URL-eket, és egy folyamat, úgynevezett <strong>URL normalizáció</strong> segítségével standardizálja azokat, eltávolítva a felesleges paramétereket, kisbetűssé alakítva az összes karaktert, és megoldva az URL-ekben található átirányításokat.</p>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>A pók továbbá naplózza a weboldalak szövegét és egyéb tartalmát a későbbi felhasználás céljából, együtt az oldal metaadataival, például az oldal címével, leírásával és kulcsszavaival. A keresőmotor ezt az információt fogja felhasználni az oldal témájának és a hozzá releváns keresési kifejezéseknek a meghatározásához.</p>
</div>
<h3 id="a-keresomotor-indexeli-a-megszerzett-informaciokat" tabindex="-1"><a class="header-anchor" href="#a-keresomotor-indexeli-a-megszerzett-informaciokat"><span>A keresőmotor indexeli a megszerzett információkat:</span></a></h3>
<p>Minden pók visszaküldi a naplózott információkat a keresőmotornak, amely feldolgozza az adatokat, mielőtt azokat egy index nevű adatbázisban tárolná. Az index lényegében egy hatalmas lista weboldalakról, tartalmukról és kapcsolódó információkról. Az index az adatbázis, amelyet a keresőmotor használ a keresések eredményeinek megtalálásához.</p>
<p>A keresőmotor szervezi az indexet, hogy segítsen neki gyorsan releváns keresési eredményeket visszaadni. Az index csoportokba rendeződik, amelyeket témák szerint sorolnak be, és mindegyik csoportot különböző pontszámokkal lát el, amelyek kifejezik a csoport relevanciáját a konkrét kulcsszavak vagy keresési kifejezések szempontjából.</p>
<p>Az indexben a keresőmotor tárolja az oldalak közötti linkek részleteit is. A keresőmotor ezt az információt használja a webhely szerkezetének és annak kapcsolatának a teljes webhez viszonyított értékeléséhez, valamint ahhoz, hogy mennyire tekintélyesek a weboldalak és webhelyek.</p>
<h3 id="a-keresomotor-minden-bejart-oldalt-rangsorol" tabindex="-1"><a class="header-anchor" href="#a-keresomotor-minden-bejart-oldalt-rangsorol"><span>A keresőmotor minden bejárt oldalt rangsorol:</span></a></h3>
<p>Az indexelési folyamat részeként a keresőmotor rangsorolja minden adatbázishoz hozzáadott weboldalt, értéket rendelve az oldalnak, ami kifejezi annak relevanciáját egy vagy több konkrét lekérdezéshez. Egyszerűen fogalmazva, a keresőmotor a rangsorolást úgy végezheti el, hogy felméri, hogy az adott oldalon hány kulcsszó és keresési kifejezés jelenik meg, hány külső link mutat erre az oldalra, és milyen magas minőségűek ezek a linkek. Például egy olyan oldal, amely sok olyan webhelyről kap linket, amelyet a keresőmotor magas minőségű és tekintélyesnek tart, magasabb rangsorolást kap.</p>
<p>A keresőmotor megpróbálja meghatározni az oldal tartalmának minőségét is, algoritmikusan keresve az eredeti, magas minőségű tartalmat, nem pedig az alacsony minőségű tartalmat, amely máshol is elérhető. Ennek a vizsgálatnak a részeként a keresőmotor elemezni fogja a kulcsszavak és keresési kifejezések használatát az oldal tartalmában, beleértve azok gyakoriságát és hol jelennek meg az oldalon.</p>
<h2 id="optimalizald-weboldaladat-a-keresomotorok-szamara" tabindex="-1"><a class="header-anchor" href="#optimalizald-weboldaladat-a-keresomotorok-szamara"><span>Optimalizáld weboldaladat a keresőmotorok számára</span></a></h2>
<p>Ahhoz, hogy minél több minőségi látogatót vonzz a weboldaladra, érdemes optimalizálni azt a keresőmotorok számára. Ez a keresőoptimalizálási folyamat segíthet weboldaladnak magasabb helyezést elérni a keresőmotorok találati oldalain, ezáltal láthatóbbá téve azt az információt kereső internetezők számára. Az <strong>SEO</strong> (keresőmotor optimalizálás) segíthet csökkenteni weboldalad visszautasítási arányát is, azaz azoknak a látogatóknak a százalékát, akik látogatást tesznek a weboldaladon, de nem maradnak ott, hanem <strong>&quot;ugrálnak&quot;</strong> egy másik oldalra, mert úgy döntöttek, hogy az oldalad nem felel meg az igényeiknek.</p>
<h3 id="azonositsd-azokat-a-kulcsszavakat-amelyekkel-az-emberek-keresik-a-termekedet-vagy-szolgaltatasodat" tabindex="-1"><a class="header-anchor" href="#azonositsd-azokat-a-kulcsszavakat-amelyekkel-az-emberek-keresik-a-termekedet-vagy-szolgaltatasodat"><span>Azonosítsd azokat a kulcsszavakat, amelyekkel az emberek keresik a termékedet vagy szolgáltatásodat:</span></a></h3>
<p>Először is, dolgozz azon, hogy azonosítsd azokat a kulcsszavakat és keresési kifejezéseket, amelyeket az emberek használnak a terméked vagy szolgáltatásod keresésekor.</p>
<p>Ezután kiemelten szerepeld ezeket a kulcsszavakat és keresési kifejezéseket a weboldaladon, hogy a keresőmotorok &quot;pókjai&quot; felfedezzék és rangsorolják az oldalad a keresések eredményeiben.</p>
<figure><img src="@source/demo/images/12-fejezet/274-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>A kulcsszavak és keresési kifejezések azonosításához kezdd azzal, hogy egy alaplistát hozol létre brainstormingolva kollégáiddal. Bevonhatod ügyfélszolgálati képviselőidet és segélyszolgálatodat is, hogy kulcsszavakat és keresési kifejezéseket szerezz be ügyfélkérdésekből és problémákból, amelyekkel a terméked vagy szolgáltatásod kapcsán szembesülnek. Ezután vizsgálj meg olyan eszközöket, mint a Google Kulcsszótervező, <strong>https://ads.google.com/aw/keywordplanner/home</strong>; a SEMrush, <strong>www.semrush.com</strong>; és a Hootsuite, <strong>www.hootsuite.com</strong>.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tipp:</p>
<p>Kezdd a Google Kulcsszótervezővel, amely ingyenes, feltéve, hogy rendelkezel egy Google Ads fiókkal; ha nincs fiókod, pár perc alatt létrehozhatsz egyet. A Google Kulcsszótervező segítségével kereshetsz azonosított kulcsszavak alapján, megtekintheted az új kulcsszavakat, megkaphatod a keresési volumeneket és előrejelzéseket, valamint elolvashatod a jelentéseket.</p>
</div>
<h3 id="add-a-kulcsszavakat-a-weboldal-oldalaihoz" tabindex="-1"><a class="header-anchor" href="#add-a-kulcsszavakat-a-weboldal-oldalaihoz"><span>Add a kulcsszavakat a weboldal oldalaihoz:</span></a></h3>
<p>Miután azonosítottad a weboldalad számára szükséges kulcsszavakat, használd őket megfelelően az oldalakon. Az alábbiak négy kulcsfontosságú területe:</p>
<ul>
<li>
<p><strong>Címke címsorok:</strong> Fogalmazd meg az oldal címsorait úgy, hogy pontosan összefoglalják az oldal tartalmát, de tartalmazzák az összes releváns kulcsszót is.</p>
</li>
<li>
<p><strong>Meta címkék:</strong> Győződj meg róla, hogy minden oldal tartalmazza a meta címkéket, amelyek pontosan leírják a tartalmát. Használd az alkalmazkodó keresőkulcsszavakat és kifejezéseket a meta címkékben.</p>
</li>
<li>
<p><strong>Fejléc címkék:</strong> Logikusan strukturáld az oldalaidat megfelelő szintű fejlécekkel, használva az h1 elemeket a fő részekhez, az h2 elemeket az h1 részek felosztásához, és az h3 elemeket az h2 alrészekre. Tartalmazzák a releváns keresési kulcsszavakat és kifejezéseket a fejlécekben, minden fejlécet ésszerűen röviden tartva és mindegyik fejlécet egyedivé téve az adott oldalon.</p>
</li>
<li>
<p><strong>Oldaltartalom:</strong> Használd a kulcsszavakat és kifejezéseket ott, ahol a tartalmad ezeket lefedi. Győződj meg róla, hogy minden kulcsszó vagy kifejezés releváns mindenhol, ahol használod őket. Kerüld a csábítást, hogy olyan forró keresési kifejezéseket is beilleszts a meta címkékbe, amelyek nem fedik le az adott témákat.</p>
</li>
</ul>
<div class="hint-container warning">
<p class="hint-container-title">Érdemes megjegyezni:</p>
<p>A keresőmotorok tudatában vannak annak, hogy a webmesterek megpróbálnak befolyásolni a &quot;pókokat&quot;, ezért az algoritmusok úgy vannak beállítva, hogy leminősítsék azokat az oldalakat, amelyek meta címkéi olyan tartományt jelölnek, amit az oldalak tartalma valójában nem nyújt.</p>
</div>
<h3 id="szolgaltass-magas-minosegu-tartalmat-es-tartsd-azt-naprakeszen" tabindex="-1"><a class="header-anchor" href="#szolgaltass-magas-minosegu-tartalmat-es-tartsd-azt-naprakeszen"><span>Szolgáltass magas minőségű tartalmat, és tartsd azt naprakészen:</span></a></h3>
<p>A megfelelő kulcsszavak és keresési kifejezések használata nélkülözhetetlen, de ugyanolyan fontos weboldalak létrehozása, amelyek magas minőségű tartalmat nyújtanak. Az ilyen tartalom fontos mind a keresőmotorok számára, amelyek összehasonlítják az oldaltartalmat a kulcsszavakkal annak minőségének meghatározása érdekében, mind a látogatóid számára, akik valószínűleg pontos információkért, megbízható tanácsokért és meggyőző gondolatokért látogatják webhelyedet.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tipp:</p>
<p>Amint weboldalad elérhetővé válik, ne pihenj a babérjaidon. Ehelyett fejleszd és valósítsd meg a frissítési ütemtervet, hogy biztosítsd, hogy oldalaid mindig a legfrissebb információkat tartalmazzák, és ne váltakozzanak elavulttá.</p>
</div>
<h3 id="optimalizald-weboldalad-technikai-aspektusait" tabindex="-1"><a class="header-anchor" href="#optimalizald-weboldalad-technikai-aspektusait"><span>Optimalizáld weboldalad technikai aspektusait:</span></a></h3>
<p>Szükséges továbbá optimalizálni a weboldal technikai aspektusait is, biztosítva, hogy elérhető legyen a keresőmotorok számára, hogy a kódja minél tisztább és teljesebb legyen, valamint hogy a webhely reagáljon az összes kliensre. Valószínűleg weboldaladnak rendelkeznie kell egy robots.txt fájlal, hogy megmondja a &quot;pókoknak&quot;, hogyan járják be az oldalt. További információkért lásd a következő szakaszt.</p>
<h3 id="fejlessz-ki-visszahivatkozasokat-backlinks-weboldaladhoz" tabindex="-1"><a class="header-anchor" href="#fejlessz-ki-visszahivatkozasokat-backlinks-weboldaladhoz"><span>Fejlessz ki visszahivatkozásokat (backlinks) weboldaladhoz:</span></a></h3>
<p>A keresőmotorok a visszahivatkozásokat, azaz más weboldalakról érkező linkeket a te weboldaladra, kulcsfontosságú tényezőként használják a weboldalad rangsorolásának meghatározásában a keresési eredmények között. Ez azt jelenti, hogy fontos, hogy minél több magas minőségű, tekintélyes külső webhelyet sikerüljön rávenni, hogy linkeljenek a weboldaladra.</p>
<p>A visszahivatkozások kialakításához lépj kapcsolatba azokkal a weboldalakkal, amelyeket szeretnél linkelni a saját oldaladra. Minél erősebb a tartalmad, annál könnyebb lesz visszahivatkozásokat kialakítani. Azáltal, hogy vendégeket hívsz meg a weboldaladra, ösztönözheted őket, hogy linkeljenek a weboldaladra.</p>
<h3 id="elemezd-ki-weboldalad-teljesitmenyet" tabindex="-1"><a class="header-anchor" href="#elemezd-ki-weboldalad-teljesitmenyet"><span>Elemezd ki weboldalad teljesítményét:</span></a></h3>
<p>Elemezd ki weboldalad teljesítményét egy olyan eszköz segítségével, mint például a Google Analytics, <strong>https://analytics.google.com</strong>, amely lehetővé teszi weboldalad forgalmának és látogatói viselkedésének nyomon követését. Ez az elemzés megmutatja, hogy mely részei a weboldaladnak teljesítenek az elvárásoknak, és melyek igényelnek javítást.</p>
<h2 id="utmutato-kereso-pokokhoz-egy-robots-txt-fajllal" tabindex="-1"><a class="header-anchor" href="#utmutato-kereso-pokokhoz-egy-robots-txt-fajllal"><span>Útmutató kereső pókokhoz egy <strong>'robots.txt'</strong> fájllal</span></a></h2>
<p>Ha webhelye olyan mappákat tartalmaz, amelyeket nem szeretne, hogy a keresőmotorok pókjai bejárjanak, készítsen egy robots.txt fájlt, hogy elmondja a pókoknak, mely mappákat hagyják ki. A fájl tartalmazhat az összes pókra vonatkozó utasítást, vagy különböző utasításokat különböző pókokra. Például megtilthatja az összes póknak, hogy ne járja be a privát mappákat, vagy konkrét pókoknak mondhatja meg, hogy egyáltalán ne járják be a webhelyét, hogy csökkentsék a szerver terhelését.</p>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Legyen világos, hogy a robots.txt csak tanácsadó jellegű: A pókok figyelmen kívül hagyhatják, és még akkor is, ha a pók engedelmeskedik a ne járja be az utasításnak, a keresőmotor  akkor is indexelni tudja az oldalakat.</p>
</div>
<h3 id="annak-megertese-hogy-egy-robots-txt-fajl-mit-es-mit-nem-csinal" tabindex="-1"><a class="header-anchor" href="#annak-megertese-hogy-egy-robots-txt-fajl-mit-es-mit-nem-csinal"><span>Annak megértése, hogy egy <strong>robots.txt</strong> fájl mit és mit nem csinál:</span></a></h3>
<p>A robots.txt fájl utasításokat ad a webhelyét feltérképező pókokhoz. A fájl egy vagy több direktívakészletből áll. Az első direktíva, a User-agent: meghatározza az érintett pókokat. A második és az azt követő Disallow: utasítás felsorolja azokat a mappákat, amelyeket a pókoknak ki kell hagyniuk.</p>
<p>A 12-1. táblázat felsorolja a széles körben feltérképező pókokat User‐agent neveikkel együtt.</p>
<table>
<thead>
<tr>
<th style="text-align:center">Table 12-1: Spiders and Their User‐Agent Names</th>
</tr>
</thead>
</table>
<table>
<thead>
<tr>
<th style="text-align:left">Description</th>
<th style="text-align:left">User-agent Name</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Googlebot</td>
<td style="text-align:left">Googlebot</td>
</tr>
<tr>
<td style="text-align:left">Bingbot</td>
<td style="text-align:left">Bingbot</td>
</tr>
<tr>
<td style="text-align:left">Baidu Spider</td>
<td style="text-align:left">Baiduspider</td>
</tr>
<tr>
<td style="text-align:left">YandexBot</td>
<td style="text-align:left">YandexBot</td>
</tr>
<tr>
<td style="text-align:left">Sogou Spider</td>
<td style="text-align:left">Sogou web spider</td>
</tr>
<tr>
<td style="text-align:left">Yahoo! Slurp</td>
<td style="text-align:left">Slurp</td>
</tr>
<tr>
<td style="text-align:left">DuckDuckBot</td>
<td style="text-align:left">DuckDuckBot</td>
</tr>
<tr>
<td style="text-align:left">Exabot</td>
<td style="text-align:left">Exabot</td>
</tr>
<tr>
<td style="text-align:left">Facebot (Facebook)</td>
<td style="text-align:left">facebookexternalhit</td>
</tr>
<tr>
<td style="text-align:left">Alexa Crawler</td>
<td style="text-align:left">ia_archiver</td>
</tr>
<tr>
<td style="text-align:left">MJ12bot</td>
<td style="text-align:left">MJ12bot</td>
</tr>
<tr>
<td style="text-align:left">AhrefsBot</td>
<td style="text-align:left">AhrefsBot</td>
</tr>
<tr>
<td style="text-align:left">SemrushBot</td>
<td style="text-align:left">SemrushBot</td>
</tr>
<tr>
<td style="text-align:left">DotBot</td>
<td style="text-align:left">DotBot</td>
</tr>
<tr>
<td style="text-align:left">Applebot (Apple)</td>
<td style="text-align:left">Applebot</td>
</tr>
<tr>
<td style="text-align:left">Twitterbot (Twitter)</td>
<td style="text-align:left">Twitterbot</td>
</tr>
<tr>
<td style="text-align:left">SeznamBot</td>
<td style="text-align:left">SeznamBot</td>
</tr>
<tr>
<td style="text-align:left">Archive.org bot</td>
<td style="text-align:left">ia_archiver</td>
</tr>
<tr>
<td style="text-align:left">Discordbot</td>
<td style="text-align:left">Discordbot</td>
</tr>
<tr>
<td style="text-align:left">Gigabot</td>
<td style="text-align:left">Gigabot</td>
</tr>
</tbody>
</table>
<h3 id="hozzon-letre-egy-robots-txt-fajlt" tabindex="-1"><a class="header-anchor" href="#hozzon-letre-egy-robots-txt-fajlt"><span>Hozzon létre egy robots.txt fájlt:</span></a></h3>
<p>Hozzon létre egy csak szöveges fájlt, és mentse el robots.txt néven. A fájlban helyezzen el utasításkészleteket a pókokhoz.</p>
<p>Egy pók megszólításához írja be a User‐agent: parancsot és a pók nevét. A következő példa arra utasítja a Bing Bingbotját, hogy hagyja ki a <strong>/private/</strong> mappát:</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>User-agent: Bingbot
Disallow: /private/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Ha egy pókot név szerint szólít meg, valószínűleg több pókot is név szerint kell megszólítania. Hozzon létre egy User-agent: és Disallow: beállítást minden egyes befolyásolni kívánt pókhoz. A következő példa arra utasítja a Facebotot, hogy egyáltalán ne térképezze fel a webhelyet a Disallow beállításával: <strong>/;</strong> utasítja a DuckDuckBot-ot, hogy hagyja ki a <strong>/test/</strong> mappát és a <strong>/dev/</strong> mappát; és elmondja a Yahoo! Slurp a <strong>/dev/</strong> mappa kihagyásához:</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>User-agent: facebookexternalhit
Disallow: /
User-agent: DuckDuckBot
Disallow: /test/
Disallow: /dev/
User-agent: Slurp
Disallow: /dev/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Az összes pók megszólításához írja be a következőt: <strong>User-agent:</strong> *-t. A következő példa arra utasítja az összes pókot, hogy hagyja ki a <strong>/private/</strong> mappát és a <strong>/temp/</strong> mappát:</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>User-agent: *
Disallow: /private/
Disallow: /temp/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="a-robots-txt-fajl-uzembe-helyezese" tabindex="-1"><a class="header-anchor" href="#a-robots-txt-fajl-uzembe-helyezese"><span>A 'robots.txt' fájl üzembe helyezése:</span></a></h3>
<p>Miután létrehozta a 'robots.txt' fájlt, másolja azt a webhely gyökérkönyvtárába. Ez az egyetlen hely, ahol a pókok keresik a fájlt.</p>
<h3 id="weblap-megjelolese-indexeles-mellozesere" tabindex="-1"><a class="header-anchor" href="#weblap-megjelolese-indexeles-mellozesere"><span>Weblap megjelölése indexelés mellőzésére:</span></a></h3>
<p>Egy adott weboldalt megjelölhet egy <code v-pre>noindex</code> metacímkével, hogy a pókokat <strong>ne</strong> indexeljék. Ehhez helyezze el a következő metacímkét a weboldal fejrészében:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>robots<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>noindex<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="a-webhelyek-akadalymentesitesi-problemainak-megertese" tabindex="-1"><a class="header-anchor" href="#a-webhelyek-akadalymentesitesi-problemainak-megertese"><span>A webhelyek akadálymentesítési problémáinak megértése</span></a></h2>
<p>Annak érdekében, hogy webhely a lehető legszélesebb közönség élvezhesse, elérhetővé kell tennie azt a fogyatékkal élők számára is. Ez azt jelenti, hogy webhelyét úgy kell megtervezni és megvalósítani, hogy figyelembe vegye a látási, hallási, kognitív és agyi károsodásokat. Ez több munkát jelent, de növeli webhelye közönségét, és sokszínűbb és befogadóbb online közösséget teremt.</p>
<p>Ez a rész azonosítja a gyakori akadálymentesítési akadályokat, és bemutatja a megoldási módokat.</p>
<h3 id="vizualis-akadalymentesitesi-problemak-kezelese" tabindex="-1"><a class="header-anchor" href="#vizualis-akadalymentesitesi-problemak-kezelese"><span>Vizuális akadálymentesítési problémák kezelése:</span></a></h3>
<p>A látássérült látogatók számos akadálymentesítési problémát tapasztalhatnak a webhelyek elérésekor.</p>
<ul>
<li>
<p><strong>Színkontraszt:</strong> A látássérült látogatók, például gyengénlátó, színvak vagy diabéteszes retinopátia esetén nehézséget okozhat a színek megkülönböztetése. A probléma minimalizálása érdekében használjon nagy kontrasztú színeket weboldalain, különösen az olyan lényeges tartalmak esetében, mint a szöveg.</p>
</li>
<li>
<p><strong>Betűméret:</strong> Sokan nehezen tudják elolvasni a kis betűtípusokat. A probléma csökkentése érdekében minden szöveges tartalomhoz legalább 16 képpontos betűméretet használjon.</p>
</li>
<li>
<p><strong>Szöveg formázása:</strong> A sűrű szövegtömbök még a jó látású látogatók számára is áthatolhatatlannak bizonyulhatnak. A probléma enyhítése érdekében strukturálja a szöveges tartalmat címsorok és alcímek használatával, hogy a látogatók könnyen navigálhassanak a tartalom között. A világosan strukturált tartalom a kognitív fogyatékkal élő látogatóknak és a mobileszközöket, különösen a kis képernyős eszközöket használóknak is segít.</p>
</li>
</ul>
<h3 id="auditiv-akadalymentesitesi-problemak-kezelese" tabindex="-1"><a class="header-anchor" href="#auditiv-akadalymentesitesi-problemak-kezelese"><span>Auditív akadálymentesítési problémák kezelése:</span></a></h3>
<p>A hallássérült felhasználók számára nehézségekbe ütközhet a webhelyén található hangtartalom elérése és megértése.</p>
<ul>
<li>
<p><strong>Hangtartalom feliratok nélkül:</strong> A hallássérült felhasználók részben vagy teljesen a feliratokra hagyatkozhatnak hangtartalom lejátszásakor. A problémák elkerülése érdekében minden hangtartalomhoz biztosítson feliratot.</p>
</li>
<li>
<p><strong>Hangtartalom átirat nélkül:</strong> Hasonlóképpen biztosítson átiratokat a szöveges hangtartalomhoz, hogy a hallássérült felhasználók elolvashassák a tartalom szövegét. Ha egy hangtartalom szövegmentes, ezt írásban jelezze.</p>
</li>
</ul>
<h3 id="kognitiv-akadalymentesitesi-problemak-kezelese" tabindex="-1"><a class="header-anchor" href="#kognitiv-akadalymentesitesi-problemak-kezelese"><span>Kognitív akadálymentesítési problémák kezelése:</span></a></h3>
<p>A kognitív fogyatékkal élő felhasználóknak a webhelyek két aspektusa is nehézségbe ütközhet.</p>
<ul>
<li>
<p><strong>Összetett nyelv:</strong> Lehetőleg legyen világos és egyértelmű a nyelvezet. Ez nemcsak a kognitív fogyatékkal élőknek segít, hanem azoknak is, akiknek nem az angol az anyanyelvük. Ha az ilyen felhasználók gépi fordítást választanak a weboldalak jobb olvasásához, a világos nyelvezet segít az érthető fordítások elkészítésében.</p>
</li>
<li>
<p><strong>Bonyolult navigáció:</strong> Tegye a webhely navigációját a lehető legegyszerűbbé. A webhelytől függően ez azt jelentheti, hogy többféle navigációs eszközt is tartalmazhat, például linkeket a bal oldali oldalsávon, valamint egy navigációs sávot a tetején, amely azokat a kategóriákat és szinteket mutatja, amelyeken keresztül a felhasználó navigálhat az aktuális oldal eléréséhez. Győződjön meg arról, hogy a felhasználó gyorsan visszatérhet a webhely kezdőlapjára, függetlenül attól, hogy milyen mélyre nyúlik a webhelyen.</p>
</li>
</ul>
<h3 id="a-billentyuzet-kisegito-lehetosegeivel-kapcsolatos-problemak-kezelese" tabindex="-1"><a class="header-anchor" href="#a-billentyuzet-kisegito-lehetosegeivel-kapcsolatos-problemak-kezelese"><span>A billentyűzet kisegítő lehetőségeivel kapcsolatos problémák kezelése:</span></a></h3>
<p>Győződjön meg arról, hogy webhelye elérhető a billentyűzettel, hogy a látogatók csak a billentyűzet segítségével navigálhassanak rajta, ne pedig a mutatóeszközt kellene használniuk.</p>
<div class="hint-container warning">
<p class="hint-container-title">Leggyakoribb problémák:</p>
<p>A billentyűzet hozzáférhetőségével kapcsolatos leggyakoribb probléma a billentyűzet-csapda létrehozása. A billentyűzet csapda olyan elem, például egy modális üzenetablak vagy előugró ablak, amely megtartja a fókuszt, amikor a látogató oda navigált, és mutatóeszköz használata szükséges ahhoz, hogy az oldal egy másik részére lépjen. Csak a billentyűzet használatával a látogató az elem csapdájában marad. A billentyűzet beszorulásának elkerülése érdekében ne használjon modális üzenetablakokat és felugró ablakokat, és minden oldalt csak billentyűzettel teszteljen a közzététel előtt.</p>
<p>A billentyűzettel kapcsolatos másik probléma a mutatóeszköz használatát igénylő elemeket tartalmazó űrlapok, például választógombok és legördülő listák. A probléma elkerülése érdekében tesztelje az űrlapokat, és ellenőrizze, hogy a bennük lévő összes elem elérhető-e a billentyűzettel.</p>
</div>
<h3 id="mobil-akadalymentesitesi-problemak-kezelese" tabindex="-1"><a class="header-anchor" href="#mobil-akadalymentesitesi-problemak-kezelese"><span>Mobil akadálymentesítési problémák kezelése:</span></a></h3>
<p>Webhelyének sok látogatója fog mobileszközöket, például okostelefonokat és táblagépeket használni, ezért létfontosságú, hogy weboldalai mobilon is elérhetők legyenek. Általában két fő kérdés dominál:</p>
<ul>
<li>
<p><strong>Kis betűméretek:</strong> A kis betűméretek még nagy képernyőkön is fájdalmassá tehetik az olvasást, de kis képernyőkön megakadályozhatják, hogy az olvasók megfejtsék a szavakat, hacsak nem nagyítanak. A problémák elkerülése érdekében gyakoroljon reszponzív tervezést a 10. fejezetben leírtak szerint, és tesztelje weboldalait olyan eszközökön amik kis képernyőkkel rendelkeznek, hogy biztosan olvashatóak legyenek.</p>
</li>
<li>
<p><strong>Komplex navigáció:</strong> A kognitív akadálymentesítési problémákkal kapcsolatban ebben a részben korábban már tárgyaltuk, hogy a lehető legegyszerűbbé tegye webhelye navigációját, hogy a mobileszközöket használó látogatók könnyen tudjanak navigálni a webhelyen.</p>
</li>
</ul>
<h2 id="ismerd-meg-a-chrome-elo-fejlesztoi-eszkozeit" tabindex="-1"><a class="header-anchor" href="#ismerd-meg-a-chrome-elo-fejlesztoi-eszkozeit"><span>Ismerd meg a Chrome Élő Fejlesztői Eszközeit</span></a></h2>
<p>A legtöbb böngésző ma beépített, élő fejlesztői eszközöket tartalmaz, amelyek lehetővé teszik egy weboldal kódjának megvizsgálását, módosítását és a változtatások mentését a fájlba. Ezek az eszközök gyorsabb megoldást kínálhatnak a problémákra az élő weboldalakon, mint a kód szerkesztése egy kódszerkesztőben, a szerkesztett fájl feltöltése, majd annak ellenőrzése, hogy a problémák eltűntek-e. Ez a szakasz bemutatja a Chrome élő fejlesztői eszközeit, amelyeket röviden Fejlesztőeszköz (DevTools) néven is ismerünk.</p>
<div class="hint-container warning">
<p class="hint-container-title">Tartsd észben!</p>
<p>Általában nagyon óvatosan kell használni az élő fejlesztői eszközöket, amikor élő oldalakon dolgozol, azaz azokon az oldalakon, amelyek nyilvánosan elérhetőek a webhelyeden. Ha van tesztelő környezeted (staging server), akkor inkább ott dolgozz, hogy nagyobb mozgásteret kapj a hibák elkövetéséhez.</p>
</div>
<h3 id="a-chrome-fejlesztoeszkozok-megjelenitese" tabindex="-1"><a class="header-anchor" href="#a-chrome-fejlesztoeszkozok-megjelenitese"><span>A Chrome Fejlesztőeszközök megjelenítése:</span></a></h3>
<p>Indítsd el a Chrome-ot szokásos módon, majd menj arra a weboldalra, amelyen dolgozni szeretnél. Jobb kattintással <em><strong>(A)</strong></em> megjelenik a helyzeti menü, majd kattints az <strong>&quot;Elem ellenőrzése&quot;</strong> <em><strong>(B)</strong></em> lehetőségre. Billentyűzetről egyszerűen nyomd meg a <em><strong>Ctrl + Shift + I</strong></em> billentyűkombinációt Windows vagy Linux rendszeren, vagy a <em><strong>⌘ + Option + I</strong></em> billentyűkombinációt a Mac-en.</p>
<p>A helyzeti menüből szintén megjelenítheted a weboldal forráskódját azzal, hogy rákattintasz a <strong>&quot;Oldal forráskódának megtekintése&quot;</strong> <em><strong>(C)</strong></em> lehetőségre. Windows és Linux rendszeren kihagyhatod a helyzeti menü megnyitását, és egyszerűen használhatod a <em><strong>Ctrl + U</strong></em> billentyűparancsot, hogy megtekintsd az oldal forráskódját.</p>
<p><img src="@source/demo/images/12-fejezet/280-1.png" alt="" loading="lazy">
<img src="@source/demo/images/12-fejezet/280-2.png" alt="" loading="lazy"></p>
<p>A Chrome ablakban megjelenik a <strong>Fejlesztőeszközök</strong> ablak, amint az a közeli ábrán is látható. Alapértelmezetten a Chrome a jelenlegi weboldalt egy ablakon belüli panelre <em><strong>(D)</strong></em> zsugorítja a bal oldalon, és a Fejlesztőeszközök ablakot a jobb oldalon rögzített állapotban jeleníti meg. A rögzítési pozíciót megváltoztathatod a <strong>Fejlesztőeszközök menü gomb</strong> megnyomásával, majd a <strong>balra rögzítés</strong>, <strong>alulra rögzítés</strong>, <strong>jobbra rögzítés</strong> vagy <strong>leválasztás külön ablakba</strong> lehetőség kiválasztásával, szükség szerint. A Fejlesztőeszközök leválasztása külön ablakba különösen hasznos lehet, ha számítógépeden több monitor van csatlakoztatva.</p>
<p>Elsőre, amikor megjeleníted a Fejlesztőeszközöket, általában az alábbi komponenseket láthatod:</p>
<ul>
<li>
<p><strong>Tab sáv <em><strong>(F)</strong></em></strong>: Ezen a sávon kattinthatsz a fülekre, hogy navigálj a Fejlesztőeszközök fő ablakai között.</p>
</li>
<li>
<p><strong>Elemek ablak <em><strong>(G)</strong></em></strong>: Ez az ablak lehetővé teszi a weboldal HTML szerkezetének vizsgálatát. Az Elemek ablak megjeleníti a Dokumentum Objektum Modell fát, az elemek szerkezetét a HTML dokumentumban. A Dokumentum Objektum Modellt röviden <strong>DOM fá</strong>nak nevezik.</p>
</li>
<li>
<p><strong>Elemek ablak fül sáv <em><strong>(H)</strong></em></strong>: Ez a fül sáv lehetővé teszi különböző információk megjelenítését a <strong>Styles</strong> fül, a <strong>Computed</strong> fül, a <strong>Layout</strong> fül, az <strong>Event Listeners</strong> fül, a <strong>DOM Breakpoints</strong> fül, a <strong>Properties</strong> fül vagy az <strong>Accessibility</strong> fül kiválasztásával.</p>
</li>
<li>
<p><strong>Konzol fiók <em><strong>(I)</strong></em></strong>: A Fejlesztőeszközök két lehetőséget biztosítanak konzol parancsok megadására: az alapértelmezés szerint az alján megjelenő <strong>Konzol fiók</strong> és a <strong>Konzol ablak</strong>, amelyet megjeleníthetsz a <strong>Konzol fül</strong> <em><strong>(J)</strong></em> kattintásával a fül sávon. A Konzol fiók megjelenését az <strong>Esc</strong> billentyű lenyomásával ki- vagy bekapcsolhatod. Alternatívaként kattints a Fejlesztőeszközök menü gombra , majd válaszd a Konzol fiók elrejtése vagy a Konzol fiók megjelenítése lehetőséget, szükség szerint. A Konzol fiók gyors bezárásához kattints a <strong>Bezárás</strong> <em><strong>(K, ⌧)</strong></em> gombra.</p>
</li>
</ul>
<h3 id="valassz-egy-temat-es-beallitasokat-a-fejlesztoeszkozok-szamara" tabindex="-1"><a class="header-anchor" href="#valassz-egy-temat-es-beallitasokat-a-fejlesztoeszkozok-szamara"><span>Válassz egy témát és beállításokat a Fejlesztőeszközök számára:</span></a></h3>
<p>A Fejlesztőeszközöknek két témája van: a <strong>Világo</strong>s** téma és a <strong>Sötét</strong> téma. Alapértelmezetten a Fejlesztőeszközök a Világos téma szerint indulnak, de átválthatsz a Sötét téma használatára, ha az előnyösebb számodra. A Sötét téma kellemesebb lehet a szemednek, ha gyengén megvilágított helyen dolgozol. Beállíthatod a témát <strong>Rendszer Preferenciára</strong> is, hogy a Fejlesztőeszközök automatikusan alkalmazkodjanak a számítógép operációs rendszerének beállításához.</p>
<figure><img src="@source/demo/images/12-fejezet/281-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>A téma kiválasztásához és a beállítások konfigurálásához kattints a Fejlesztőeszközök ablak jobb felső sarkában található <strong>Beállítások</strong> ikonra <strong>(⚙️)</strong>. Megjelenik a Beállítások ablak, amely először a Beállítások fülön jeleníti meg a preferenciákat.</p>
<p>Az &quot;Appearance&quot; (Megjelenés) szakaszban kattints a <strong>Téma <em><strong>(L)</strong></em></strong> lehetőségre, majd válaszd ki a <strong>&quot;Rendszer preferencia&quot;</strong>, <strong>&quot;Világos&quot;</strong> vagy <strong>&quot;Sötét&quot;</strong> lehetőséget, ahogy szükségesnek látod.</p>
<p>Amíg a <strong>Beállítások</strong> képernyőn vagy, tekintsd át a többi beállítást, hogy tisztában legyél azokkal. Itt van két funkció, amelyeket azonnal aktiválhatsz:</p>
<ul>
<li>
<p>Az <strong>&quot;Automatically Reveal Files in Sidebar&quot;</strong> <em><strong>(M)</strong></em> beállítás lehetővé teszi, hogy amikor egy elemre kattintasz az Elemek ablakban, a Fejlesztőeszközök kibontják az elem forrásfájlját a Forrás panelen, és kiemelik az elem kódját. Ez segít a könnyebb navigációban és a kód módosításában.</p>
</li>
<li>
<p><strong>Autocompletion</strong> <em><strong>(N)</strong></em>: A Fejlesztőeszközök javaslatokat tesznek a kód kiegészítésére gépelés közben.</p>
</li>
</ul>
<p>Amikor befejezted a beállítások kiválasztását, kattints az <strong>&quot;Bezárás&quot;</strong> <em><strong>(O, ⌧ )</strong></em> gombra, hogy bezárd az Beállítások ablakot, és visszatérj a Fejlesztőeszközökhöz.</p>
<h2 id="css-hibaelharitas-a-chrome-fejlesztoeszkozokkel" tabindex="-1"><a class="header-anchor" href="#css-hibaelharitas-a-chrome-fejlesztoeszkozokkel"><span>CSS hibaelhárítás a Chrome Fejlesztőeszközökkel</span></a></h2>
<p>A Chrome Fejlesztőeszközei tartalmaznak funkciókat a CSS problémák hibakeresésére. Például előfordulhat, hogy néha, amikor egy weboldalt megjelenítesz a böngészőben, a formázás jelentősen különbözik attól, amit eredetileg szándékoztál.</p>
<p>Egy módja annak, hogy azonosítsd és megoldd az ilyen problémákat, az adott CSS fájlok megnyitása és azok tartalmának átolvasása. Ez hatékony hibaelhárítási módszer lehet, de előfordulhat, hogy a Fejlesztőeszközök használata gyorsabban és kevesebb erőfeszítéssel segít kideríteni a problémákat.</p>
<p><img src="@source/demo/images/12-fejezet/282-1.png" alt="" loading="lazy">
<img src="@source/demo/images/12-fejezet/282-2.png" alt="" loading="lazy"></p>
<h3 id="nyisd-meg-a-fejlesztoeszkozoket" tabindex="-1"><a class="header-anchor" href="#nyisd-meg-a-fejlesztoeszkozoket"><span>Nyisd meg a Fejlesztőeszközöket:</span></a></h3>
<p>Amikor CSS problémába ütközöl, és nem kapod meg a kívánt kinézetet, nyisd meg a Fejlesztőeszközöket azzal, hogy jobb kattintással <em><strong>(A)</strong></em> kiválasztod a problémás oldalt, majd rákattintasz az <strong>&quot;Elem ellenőrzése&quot;</strong> <em><strong>(B)</strong></em> lehetőségre a helyzeti menüben. A Chrome megjeleníti a Fejlesztőeszközöket.</p>
<h3 id="navigalj-az-elemek-ablakban-es-a-dom-fa-strukturajaban" tabindex="-1"><a class="header-anchor" href="#navigalj-az-elemek-ablakban-es-a-dom-fa-strukturajaban"><span>Navigálj az Elemek ablakban és a DOM fa struktúrájában:</span></a></h3>
<p>Alapértelmezetten a Fejlesztőeszközök a nézetablakot <em><strong>(C)</strong></em> jelenítik meg bal oldalon, ami a weboldalt kisebb méretben mutatja. Átméretezheted a nézetablakot úgy, hogy az elválasztó vonalat húzod, ami a Fejlesztőeszközök ablaktól választja el – ebben az esetben a <strong>jobb oldali határt</strong> <em><strong>(D)</strong></em>.
Alapértelmezés szerint az <strong>Elemek</strong> ablak jelenik meg legelőször a Fejlesztőeszközök területén; ha az Elemek ablak nem az elsődleges, kattints az <strong>Elemek fülre</strong> <em><strong>(E)</strong></em>, hogy előtérbe hozd az ablakot.
Az Elemek ablak megjeleníti az aktív HTML dokumentum DOM fáját. Szükség szerint bővítheted és összecsukhatod a DOM fa részeit. Kattints a <strong>&quot;Kibontás&quot;</strong> <em><strong>(F)</strong></em> gombra egy rész kibontásához. Kattints a <strong>&quot;Összecsukás&quot;</strong> <em><strong>(G)</strong></em> gombra egy rész összecsukásához.</p>
<h3 id="elem-ellenorzese" tabindex="-1"><a class="header-anchor" href="#elem-ellenorzese"><span>Elem ellenőrzése:</span></a></h3>
<p>Az elem ellenőrzéséhez mozgasd az egeret fölé a DOM fában. A Fejlesztőeszközök kiemelik az oldal megfelelő szakaszát a nézetablakban.</p>
<p><img src="@source/demo/images/12-fejezet/283-1.png" alt="" loading="lazy">
<img src="@source/demo/images/12-fejezet/283-2.png" alt="" loading="lazy"></p>
<p>A közelben látható ábra mutatja a következőt: amikor az egérmutatót a <code v-pre>h1</code> elem <em><strong>(H)</strong></em> fölé tartod, a Fejlesztőeszközök kiemelik a címsort <em><strong>(I)</strong></em> a nézetablakban, és egy felugró buborék <em><strong>(J)</strong></em> jelenik meg, amely megmutatja az elem <strong>típusát</strong> <em><strong>(K)</strong></em> és <strong>méretét</strong> <em><strong>(L)</strong></em>.</p>
<p>A CSS problémák azonosításához egy elemmel kapcsolatban kattints az elemre a DOM fában. A <strong>&quot;Stílusok&quot;</strong> ablak megjeleníti az elemre alkalmazott formázást.</p>
<p>A közelben látható ábra mutatja az eredményt, amikor egy <code v-pre>h2</code> elemre <em><strong>(M)</strong></em> kattintasz. A Fejlesztőeszközök kiemelik az elemet <em><strong>(N)</strong></em> a nézetablakban, és egy felugró buborék <em><strong>(O)</strong></em> jelenik meg. A <strong>&quot;Stílusok&quot;</strong> ablak <em><strong>(P)</strong></em> a Fejlesztőeszközök jobb oldalán megjeleníti az elemre alkalmazott stílusokat.</p>
<h2 id="css-hibaelharitas-a-chrome-fejlesztoeszkozokkel-folyatas" tabindex="-1"><a class="header-anchor" href="#css-hibaelharitas-a-chrome-fejlesztoeszkozokkel-folyatas"><span>CSS hibaelhárítás a Chrome Fejlesztőeszközökkel (folyatás)</span></a></h2>
<p>A <strong>&quot;Styles&quot; (Stílusok)</strong> ablak a Chrome Fejlesztőeszközökkel lehetővé teszi számodra, hogy pontosan láthasd, milyen stílusokat alkalmaz a böngésző a kiválasztott elemre. Az &quot;Styles&quot; ablakban található információk elemzésével gyorsan azonosíthatod az eltéréseket a <strong>HTML</strong> dokumentum használt különböző stíluslapjai között. Ki tudod kapcsolni az egyes tulajdonságokat a stíluslapokban, hogy finomhangold a stílusok sorrendjét, amíg a dokumentum formázása úgy jelenik meg, ahogy azt szeretnéd.</p>
<h3 id="vizsgald-meg-az-egy-elemre-alkalmazott-stilusokat" tabindex="-1"><a class="header-anchor" href="#vizsgald-meg-az-egy-elemre-alkalmazott-stilusokat"><span>Vizsgáld meg az egy elemre alkalmazott stílusokat:</span></a></h3>
<p>Amint rákattintottál az elemre, amelyet meg szeretnél vizsgálni, a <strong>Stílusok</strong> ablak megjeleníti az adott elemre alkalmazott stílusokat. A közeli ábrán öt <code v-pre>h2</code> stílust láthatsz működésben.</p>
<figure><img src="@source/demo/images/12-fejezet/283-3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>
<p>Az <code v-pre>element.style</code> <em><strong>(A)</strong></em> kiolvasás az elemhez közvetlenül alkalmazott inline stílusokat mutatja — ebben az esetben az <code v-pre>h2</code> elemre vonatkozóan. A példában nem alkalmaznak <code v-pre>inline</code> stílust, ami gyakran előfordul, ha formázást alkalmazol belső vagy külső stíluslapokon keresztül. Azonban a <strong>Stílusok</strong> ablak továbbra is megjeleníti az <code v-pre>element.style</code> kiolvasást, hogy ellenőrizhesd, nincs-e <code v-pre>inline</code> stílus alkalmazva — vagy alkalmazhatsz inline stílust, ha úgy szeretnéd.</p>
</li>
<li>
<p>Három <code v-pre>h2</code> stílus van, egy-egy a <strong>&quot;new3.css&quot;</strong> <em><strong>(B)</strong></em>, a <strong>&quot;new2.css&quot;</strong> <em><strong>(C)</strong></em> és a <strong>&quot;new1.css&quot;</strong> <em><strong>(D)</strong></em> fájlban. Az HTML dokumentum három külső stíluslapot kapcsol be, a <strong>&quot;new1.css&quot;</strong>, <strong>&quot;new2.css&quot;</strong> és <strong>&quot;new3.css&quot;</strong> fájlokat, ebben a sorrendben alkalmazva. Ahogyan látható, mindegyik stíluslap meghatározza az <code v-pre>h2</code> stílust, megadva a <code v-pre>background-color</code> tulajdonságot és a <code v-pre>color</code> tulajdonságot. A három stíluslap közül az utolsó, <strong>&quot;new3.css&quot;</strong>, felülbírálja az előző két stíluslapot, így a böngésző az ő beállításait használja. A <strong>Stílusok</strong> ablak elsőként listázza a három külső stíluslap közül a <em><strong>&quot;new3.css&quot;</strong></em>-t, mert az <em><strong>h2</strong></em> elem ezt használja. A <strong>Stílusok</strong> ablak <strong>keresztülhúzást</strong> <em><strong>(E)</strong></em> jelenít meg az <code v-pre>h2</code> elem tulajdonságaira a <strong>&quot;new2.css&quot;</strong> és <strong>&quot;new1.css&quot;</strong> stíluslapokban, hogy jelezze, ezek a tulajdonságok felül lettek írva.</p>
</li>
<li>
<p>Az <code v-pre>h2</code> stílus a <strong>&quot;user agent stylesheet&quot;</strong> <em><strong>(F)</strong></em> része — ez a stíluslap, amelyet a böngésző használ. A böngésző saját stílusai a stílusláncolat legalacsonyabb szintjén helyezkednek el, és azokat az elemeket formázzák, amelyeket másként nem formáztak.</p>
</li>
</ul>
<h3 id="alkalmazz-vagy-allits-be-egy-inline-stilust" tabindex="-1"><a class="header-anchor" href="#alkalmazz-vagy-allits-be-egy-inline-stilust"><span>Alkalmazz vagy állíts be egy <strong>inline</strong> stílust:</span></a></h3>
<figure><img src="@source/demo/images/12-fejezet/284-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>Ha felül szeretnéd írni a formázást egy adott elem egy példányára, alkalmazhatsz egy <code v-pre>inline</code> stílust a stílusinformációk hozzáadásával az elemhez. A stílusdefiníció megjelenik az Stílusok ablak tetején, amikor az elemet kiválasztod a DOM-ban. Ha már van <code v-pre>inline</code> stílus, akkor azt igény szerint módosíthatod.</p>
<p>Például, a közeli ábrán az <code v-pre>element.style</code> definíció most sárga színt alkalmaz <em><strong>(G)</strong></em>:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">element.style</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Amikor hozzáadod ezt az információt az <strong>Stílusok</strong> ablakban, a Fejlesztőeszköz automatikusan beilleszti a <code v-pre>style</code> attribútumot a nyitó <code v-pre>&lt;h2&gt;</code> címkébe <em><strong>(H)</strong></em>. A <code v-pre>color</code> tulajdonság a <strong>&quot;new3.css&quot;</strong> stíluslapban felül van írva, és <strong>áthúzással</strong> jelenik meg <em><strong>(I)</strong></em>. És a nézetablakban az <code v-pre>h2</code> elem formázást kap <em><strong>(J)</strong></em>.</p>
<h3 id="kapcsold-be-vagy-ki-a-stilustulajdonsagokat" tabindex="-1"><a class="header-anchor" href="#kapcsold-be-vagy-ki-a-stilustulajdonsagokat"><span>Kapcsold be vagy ki a stílustulajdonságokat:</span></a></h3>
<p>Amikor különböző ütköző tulajdonságokkal kell kísérletezned az általad kiválasztott elem DOM-ban, menj az <strong>Stílusok</strong> ablakhoz, és mozgasd az egeret azon stílus fölé, amelyet meg szeretnél változtatni. A Fejlesztőeszköz egy jelölőnégyzetet jelenít meg minden tulajdonsághoz, lehetővé téve, hogy bekapcsold a tulajdonságokat a kijelölésükkel <em><strong>(K)</strong></em> vagy kikapcsold azokat a kijelölésük eltávolításával <em><strong>(L)</strong></em>.</p>
<p>Amikor egy tulajdonság jelölőnégyzetét eltávolítod, az adott tulajdonság következő előfordulása válik aktívvá a stílusláncolatban. A példában a következő tulajdonság kijelölésének megszüntetésének hatására az <code v-pre>element.style</code>-on belül a <code v-pre>color: yellow;</code> helyett a <code v-pre>color: whitesmoke;</code> lesz aktív a <strong>&quot;new3.css&quot;</strong> fájlban. Hasonlóan, ha kikattintod a(z) <code v-pre>background‐color: black;</code> tulajdonságot a(z) <strong>&quot;new3.css&quot;</strong> fájlban, a következő <code v-pre>background‐color: blue;</code> tulajdonság lesz aktív a(z) <strong>&quot;new2.css&quot;</strong> fájlban. A megjelenítőablak mutatja a változások hatását <em><strong>(M)</strong></em>.</p>
<p>A Chrome Fejlesztőeszköz lehetővé teszi számodra, hogy szerkeszthesd az HTML dokumentum szövegét a DOM-ban. Ez a képesség hasznos lehet olyan változtatások végrehajtására, amelyeket azonosítasz, és amelyekre szükség lehet, amíg a CSS-en dolgozol. Szerkesztheted az HTML dokumentum HTML kódját is, amire különböző okokból lehet szükség, például a stílusláncolattal kapcsolatos problémák javításához. Szerkeszthetsz egy stíluslapot a <strong>Források (Sources)</strong> ablakban a Fejlesztőeszközben, és törölhetsz egy stíluslap linket az HTML dokumentum <code v-pre>head</code> <strong>(fejléc)</strong> eleméből szükség esetén.</p>
<h3 id="szerkeszd-az-html-dokumentum-szoveget" tabindex="-1"><a class="header-anchor" href="#szerkeszd-az-html-dokumentum-szoveget"><span>Szerkeszd az HTML dokumentum szövegét:</span></a></h3>
<p>Amikor változtatást kell végrehajtanod az HTML dokumentum szövegén, amelyen a Fejlesztőeszközt használod, jobb kattints azon elemre, amelyet szeretnél szerkeszteni <em><strong>(A)</strong></em>, majd kattints a szerkesztés szövegre <em><strong>(B)</strong></em> a kontextusmenüben.</p>
<figure><img src="@source/demo/images/12-fejezet/285-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>A Fejlesztőeszköz megnyitja az elemet szerkesztésre. Írd be a javításaidat <em><strong>(C)</strong></em>, majd kattints valahová máshova az alkalmazásukhoz és a <strong>Szöveg Szerkesztési Módból</strong> való kilépéshez. A változtatások megjelennek a DOM-ban és a nézetablakban.</p>
<h3 id="szerkeszd-az-html-dokumentum-html-kodjat" tabindex="-1"><a class="header-anchor" href="#szerkeszd-az-html-dokumentum-html-kodjat"><span>Szerkeszd az HTML dokumentum HTML kódját:</span></a></h3>
<p>Amikor szerkeszteni szeretnéd az HTML dokumentum szövegét, amelyet a Fejlesztőeszközben vizsgálsz, jobb kattints azon elemre, amelyet szerkeszteni szeretnél <em><strong>(D)</strong></em>, majd kattints az <strong>Szerkesztés HTML-ként</strong> lehetőségre <em><strong>(E)</strong></em> a kontextusmenüben.</p>
<figure><img src="@source/demo/images/12-fejezet/286-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>A Fejlesztőeszköz megnyitja az <strong>HTML-t</strong> szerkesztésre. Végezd el a változtatásokat, majd kattints az alul lévő mini-szerkesztőn kívül azok alkalmazásához és az HTML szerkesztési módból való kilépéshez. A változtatások hatása megjelenik a nézetablakban.</p>
<h3 id="nyisd-meg-a-stiluslapot-szerkeszteshez" tabindex="-1"><a class="header-anchor" href="#nyisd-meg-a-stiluslapot-szerkeszteshez"><span>Nyisd meg a stíluslapot szerkesztéshez:</span></a></h3>
<p>Amikor meg kell változtatnod az egyik stíluslapfájlt, amely a Fejlesztőeszközben dolgozott HTML dokumentumhoz kapcsolódik, kattints a stíluslapfájl nevére <em><strong>(F)</strong></em> az <strong>Stílusok</strong> ablakban. Minden név egy link, ahogy azt az aláhúzás is sugallja.</p>
<figure><img src="@source/demo/images/12-fejezet/286-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>A Fejlesztőeszköz az Elemek ablakról átvált az Források ablakra, ahogy azt a közeli ábrán láthatod. Itt az <strong>Oldal</strong> ablak <em><strong>(G)</strong></em> megjeleníti az kiválasztott CSS fájl elérési útját. A jobb oldali ablak <em><strong>(H)</strong></em> megjeleníti a CSS fájl tartalmát, amelyet szabadon szerkeszthetsz. A Fejlesztőeszköz hasznos funkciókat biztosít, például az automatikus kiegészítést <em><strong>(I)</strong></em>.</p>
<p>Amikor befejezted a munkát a CSS fájlon, kattints az <strong>Elemek</strong> <em><strong>(J)</strong></em> gombra, hogy újra megjelenítse az <strong>Elemek</strong> ablakot.</p>
<h3 id="tavolits-el-egy-stiluslapot-az-html-dokumentumbol" tabindex="-1"><a class="header-anchor" href="#tavolits-el-egy-stiluslapot-az-html-dokumentumbol"><span>Távolíts el egy stíluslapot az HTML dokumentumból:</span></a></h3>
<figure><img src="@source/demo/images/12-fejezet/287-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>Ha teljesen el kell távolítanod egy stíluslapot az HTML dokumentumból, navigálj az <strong>Elemek</strong> ablakban a DOM-hoz, és bontsd ki a dokumentum head szekcióját, ha össze van csukva. Jobb kattints a <strong>stíluslapot jelölő link elemre</strong> <em><strong>(K)</strong></em>, majd kattints a <strong>Törlés elemre</strong> <em><strong>(L)</strong></em> a kontextusmenüben. A Fejlesztőeszköz törli az elemet, eltávolítva a stíluslap linkjét.</p>
<h2 id="egy-tesztelo-szerver-hasznalata" tabindex="-1"><a class="header-anchor" href="#egy-tesztelo-szerver-hasznalata"><span>Egy tesztelő szerver használata</span></a></h2>
<p>Egy tesztelőszerver egy előprodukciós környezet, amelyet a weboldaladon történő változtatások és új oldalak tesztelésére használsz, mielőtt azokat élőben megjelenítenéd. A tesztelőszerver tartalmazza az élő oldal replikáját, általában ugyanazt a szoftvert futtatva, ugyanazzal a konfigurációval és ugyanazokkal az adatokkal.</p>
<div class="hint-container tip">
<p class="hint-container-title">Miért lehet fontos ennek használata?</p>
<p>A tesztelő szerver biztosít egy biztonságos környezetet, ahol tesztelheted az új oldalakat, frissítéseket, új funkciókat és teljesítményjavításokat <strong>anélkül</strong>, hogy azokat kitennéd a weboldal látogatóinak vagy befolyásolnád az oldal teljesítményét. Amint befejezted az új anyagok tesztelését és a problémák javítását, és biztos vagy benne, hogy minden működik, alkalmazhatod a változtatásokat az élő weboldalon.</p>
</div>
<h3 id="ismerd-meg-a-tesztelo-szerver-elonyeit" tabindex="-1"><a class="header-anchor" href="#ismerd-meg-a-tesztelo-szerver-elonyeit"><span>Ismerd meg a tesztelő szerver előnyeit:</span></a></h3>
<p>Egy tesztelő szerver számos előnyt kínálhat:</p>
<ul>
<li>
<p><strong>Biztos tesztelő környezetet biztosít</strong>: A tesztelő szerver olyan tesztelő környezetet biztosít, amelyet ugyanúgy konfiguráltak, mint az aktuális weboldaladat, amelyet használhatsz az oldalak vagy alkalmazások változtatásainak teszteléséhez anélkül, hogy problémákat okoznál a weboldal látogatóinak. Ez a környezet lehetővé teszi, hogy azonosítsd a problémákat és javítsd azokat, mielőtt alkalmaznád a kódot az élő weboldalon.</p>
</li>
<li>
<p><strong>Együttműködési helyként működik</strong>: Te és kollégáid együtt dolgozhattok a kódokon a tesztelő szerveren. A közös munkaterület elősegítheti a hatékonyabb együttműködést, és gyorsabb fejlesztést eredményezhet, mint az elkülönült silókban való munkavégzés. Ez elméletben működik; a tapasztalatok eltérőek lehetnek.</p>
</li>
<li>
<p><strong>Lehetővé teszi az egyszerűsített telepítést</strong>: A kód tesztelése a tesztelő szerveren segít abban, hogy biztosítsd, hogy a kód megfelelően fog működni, amikor kikerül az élő weboldalra. Ez a tesztelési szakasz rutinosabbá és kevésbé stresszessé teszi a telepítést, ami általában üdvözlendő.</p>
</li>
</ul>
<h3 id="hol-talalhato-a-tesztelo-szerver" tabindex="-1"><a class="header-anchor" href="#hol-talalhato-a-tesztelo-szerver"><span>Hol található a tesztelő szerver?</span></a></h3>
<p>A tesztelő szerver elhelyezkedhet a <strong>vállalat helyszínén</strong>, a <strong>hálózati infrastruktúra részeként</strong>, vagy a <strong>helyszínen kívül</strong> egy <strong>szerverfarmban</strong> vagy <strong>felhőalapú</strong> környezetben. Jelenlegi írásom idején az helyszínen kívüli megoldások népszerűbbek, mint a helyszínen belüliek.</p>
<div class="hint-container tip">
<p class="hint-container-title">Értékeld meg, hogy szükséged van-e tesztelő szerverre.</p>
<p>Ha bármilyen méretű vagy összetettségű weboldalt üzemeltetsz, valószínűleg előnyös lehet számodra egy tesztelő szerver, az előző albekezdésben ismertetett okok miatt. De ha egyszerűen csak saját kis weboldalad van, és a weboldal látogatóinak zavarásának lehetősége inkább kisebb aggodalom, mint nagy aggodalom, akkor valószínűleg nincs szükséged tesztelő szerverre.</p>
</div>
<h3 id="hogyan-allits-be-egy-tesztelo-szervert" tabindex="-1"><a class="header-anchor" href="#hogyan-allits-be-egy-tesztelo-szervert"><span>Hogyan állíts be egy tesztelő szervert?</span></a></h3>
<p>Egy tesztelő szerver létrehozásához általában a következő hét lépést kell követned:</p>
<ol>
<li>
<p><strong>Válassz helyszínt a tesztelő szerver elhelyezéséhez</strong>: Néhány vállalat és szervezet saját hálózatukon helyezi el a tesztelő szervereket, de általában az off-premises szervertárhely használata a tipikusabb. Feltéve, hogy szervertárhelyet fogsz használni, dolgozd ki, hogy milyen technikai jellemzőkkel kell rendelkeznie a szervernek a tervezett tesztelési és fejlesztési tevékenységekhez, és határozd meg a költségvetésed. Ezután nézd meg, melyik szolgáltató felelhetne meg az igényeidnek, értékelve mind az olyan szolgáltatókat, amelyek dedikált szervereket kínálnak, mind azokat, amelyek felhőalapú szervereket biztosítanak.</p>
</li>
<li>
<p><strong>Válassz szerverkonfigurációt</strong>: Miután kiválasztottad a szolgáltatót, válaszd ki, hogy melyik szerverkonfigurációt szeretnéd használni a szolgáltató kínálatából. A legtöbb szolgáltató széles választékot kínál különféle konfigurációkkal, végtelen típusú processzorokkal, különféle RAM mennyiségekkel és a szerénytől a hatalmas tárhelyig terjedő tárolókapacitással. Határozd meg az operációs rendszert, amelyet szeretnél - általában Windows vagy Linux. Győződj meg arról, hogy könnyen frissítheted a konfigurációt, ha a weboldal tesztelési igényei növekednek.</p>
</li>
<li>
<p><strong>Telepítsd az operációs rendszert, a webszervert és a webes veremrendszert</strong>: Amint ellenőrzésed alatt van a szervered, telepítsd az operációs rendszert, a webszervert és a szükséges fejlesztői környezetet.</p>
</li>
<li>
<p><strong>Biztosítsd a szerveredet</strong>: Még akkor is, ha a szerver fizikailag egy szerverfarmban helyezkedik el, vagy csak egy felhőalapú virtuális gépként létezik, biztosítanod kell azt. Ellenőrizd, hogy csak azok a szolgáltatások fussanak, amelyekre szükséged van, és állíts le más szolgáltatásokat. Zárd le a portokat az illetéktelen behatolások ellen, és konfigurálj tűzfalat, hogy segítsen elkerülni a nem kívánt támadásokat.</p>
</li>
<li>
<p><strong>Állítsd be a szervert fejlesztésre és tesztelésre</strong>: Hozz létre egy környezetet a weboldal fejlesztéséhez és teszteléséhez. Hozz létre felhasználói fiókokat azoknak az embereknek, akik hozzáférnek a tesztelő szerverhez, és állíts be megfelelő engedélyeket minden felhasználói fiókhoz. Konfigurálj egy biztonsági mentési módszert, hogy képes legyél helyreállítani a szervert, ha hiba történik. Amint a szerver működik, ellenőrizd a biztonsági mentést és teszteld a helyreállítási rendszert.</p>
</li>
<li>
<p><strong>Dokumentáld a szervert</strong>: Ahogy dolgozol a szerver beállításán, rögzítsd a konfigurációt, hogy más rendszergazdák gyorsan és zökkenőmentesen tudjanak dolgozni a szerveren.</p>
</li>
<li>
<p><strong>Másold át a weboldaladat a szerverre</strong>: Másold át a weboldaladat a szerverre vagy közvetlenül a fejlesztői környezetből, vagy egy verziókezelő rendszer segítségével. Te és kollégáid ezután elkezdhetitek használni a szerveret.</p>
</li>
</ol>
<h2 id="front-end-keretrendszer-megertese" tabindex="-1"><a class="header-anchor" href="#front-end-keretrendszer-megertese"><span>Front-end keretrendszer megértése</span></a></h2>
<p>Amikor gyorsan szeretnél weboldalt vagy webalkalmazást építeni, érdemes lehet használni egy <strong>front-end</strong> keretrendszert a folyamat felgyorsításához és szabványosításához. Számítástechnikai szóhasználatban a &quot;front-end&quot; az alkalmazás felhasználói felülete, míg a háttérrendszer adatainak tárolását és feldolgozását végző részét jelenti az alkalmazásnak.</p>
<p>A front-end keretrendszer egy előre elkészített HTML, CSS és JavaScript kódokból, valamint UI komponensekből, például gombokból és űrlapokból álló készlet, amely lehetővé teszi az interfészek gyorsabb kialakítását, mint a manuális fejlesztés. Különböző front-end keretrendszerek állnak rendelkezésre, ahogyan azt a szakasz végén ismertetjük.</p>
<h3 id="a-front-end-keretrendszerek-elonyei-es-hatranyai" tabindex="-1"><a class="header-anchor" href="#a-front-end-keretrendszerek-elonyei-es-hatranyai"><span>A front-end keretrendszerek előnyei és hátrányai:</span></a></h3>
<p>A front-end keretrendszereknek az alábbi előnyei vannak:</p>
<ul>
<li>
<p><strong>Gyors fejlesztést tesznek lehetővé</strong>: Egy front-end keretrendszer előre elkészített komponensei és sablonjai segítségével sokkal gyorsabban létrehozhatsz egy weboldalt vagy webalkalmazást, mint ha mindent a nulláról kezdenél.</p>
</li>
<li>
<p><strong>Egy egységes megjelenést biztosítanak</strong>: A komponensek és sablonok segítenek abban, hogy weboldalaid és alkalmazásaid egységes megjelenést kapjanak. Ez különösen hasznos lehet, ha más fejlesztőkkel dolgozol egy projekten.</p>
</li>
<li>
<p><strong>Átjárható böngészőkben futó kódot hoznak létre</strong>: A front-end keretrendszerek olyan kódot hoznak létre, amely jól fut különböző böngészőkben és eszközökön, lehetővé téve, hogy a fejlesztésre koncentrálj, anélkül, hogy komoly időt kellene fordítanod a tesztelésre és hibaelhárításra.</p>
</li>
<li>
<p><strong>Közösségi támogatással rendelkeznek</strong>: Sok fejlesztő vesz részt a front-end keretrendszerek fejlesztésében, javításában és dokumentálásában. Tehát amikor egy keretrendszert használsz, profitálhatsz a közösség tudásából és tapasztalatából.</p>
</li>
</ul>
<p>Ami felfelé megy, az lefelé is megy, és a front-end keretrendszereknek vannak hátrányai is, amelyek ellensúlyozzák az előnyeiket:</p>
<ul>
<li>
<p><strong>Meredek tanulási görbével járnak</strong>: Időt kell fordítanod arra, hogy kiválaszd a számodra legjobb keretrendszert, valamint arra, hogy megtanuld, hogyan kell használni azt.</p>
</li>
<li>
<p><strong>A szabványosítás csökkenti a rugalmasságot</strong>: A gyártott komponensek használata felgyorsítja a fejlesztést, de korlátozva vagy azokra a komponensekre vagy, hacsak nem írsz egyedi kódot. Attól függően, hogy milyen weboldalakat és alkalmazásokat fejlesztesz, ez a korlátozás problémát jelenthet vagy sem, de érdemes figyelembe venni.</p>
</li>
<li>
<p><strong>A keretrendszer felesleges teherrel növelheti weboldalad betöltési idejét</strong>: A keretrendszer használata extra kódot adhat weboldaladhoz, ami lassíthatja annak betöltési idejét. Hasonlóképpen, egy keretrendszer növelheti egy alkalmazás fájlméretét.</p>
</li>
<li>
<p><strong>A keretrendszer-frissítések weboldal-frissítéseket is igényelhetnek</strong>: Amikor a használt front-end keretrendszer frissül, lehetséges, hogy frissítened kell mind a keretrendszerrel kapcsolatos tudásodat, mind pedig a keretrendszert használó kódodat.</p>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Érdemes-e használni front-end keretrendszert?</p>
<p>Az, hogy érdemes-e front-end keretrendszert használnod a webfejlesztés során, egy bonyolult döntés lehet. Általában véve előnyös lehet egy keretrendszer használata egy olyan projektnél, amely:</p>
<ul>
<li>Nagy és bonyolult.</li>
<li>Valószínűleg hosszú távon skálázódni vagy kiterjesztődni fog.</li>
<li>Bonyolult felhasználói interakciót, sok adatmanipulációt és valós idejű frissítéseket igényel.</li>
<li>Szűk időkerettel és szoros költségvetéssel rendelkezik.</li>
</ul>
<p>Egy keretrendszer hasznos lehet, ha csak korlátozott tapasztalattal rendelkezel a front-end fejlesztés terén. Ha ez a helyzet, a keretrendszer segíthet abban, hogy kevesebb erőfeszítéssel létrehozz egy működőképes előtétet. Azonban figyelembe kell venned azt az időt is, amit a front-end keretrendszerrel való gyors tanulással töltöttél, mielőtt hatékonyan tudnál vele dolgozni.</p>
</div>
<h3 id="melyek-a-vezeto-front-end-keretrendszerek" tabindex="-1"><a class="header-anchor" href="#melyek-a-vezeto-front-end-keretrendszerek"><span>Melyek a vezető front-end keretrendszerek?</span></a></h3>
<p>A 12-2. táblázat felsorolja a legjobb 10 front-end keretrendszert 2023 áprilisáig, megadva azok kezdeti kiadási évét, az általuk generált kód relatív súlyát és azok körülbelüli nehézségét. A táblázat említi azokat a jelentős cégeket is, amelyek használják a keretrendszereket.</p>
<table>
<thead>
<tr>
<th style="text-align:center">Table 12-2: Top 10 Front‐End Frameworks</th>
</tr>
</thead>
</table>
<table>
<thead>
<tr>
<th style="text-align:left">Framework</th>
<th style="text-align:left">Released</th>
<th style="text-align:left">Weight</th>
<th style="text-align:left">Difficulty</th>
<th style="text-align:left">Used By</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">React</td>
<td style="text-align:left">2011</td>
<td style="text-align:left">Light</td>
<td style="text-align:left">Easy</td>
<td style="text-align:left">PayPal, Netflix, Walmart</td>
</tr>
<tr>
<td style="text-align:left">Angular</td>
<td style="text-align:left">2010</td>
<td style="text-align:left">Heavy</td>
<td style="text-align:left">Hard</td>
<td style="text-align:left">BMW, Forbes</td>
</tr>
<tr>
<td style="text-align:left">JQuery</td>
<td style="text-align:left">2006</td>
<td style="text-align:left">Light</td>
<td style="text-align:left">Easy</td>
<td style="text-align:left">LinkedIn, Slack</td>
</tr>
<tr>
<td style="text-align:left">Vue.js</td>
<td style="text-align:left">2015</td>
<td style="text-align:left">Light</td>
<td style="text-align:left">Easy</td>
<td style="text-align:left">GitLab, Xiaomi</td>
</tr>
<tr>
<td style="text-align:left">Backbone.js</td>
<td style="text-align:left">2010</td>
<td style="text-align:left">Light</td>
<td style="text-align:left">Easy</td>
<td style="text-align:left">Airbnb, SoundCloud</td>
</tr>
<tr>
<td style="text-align:left">Ember.js</td>
<td style="text-align:left">2011</td>
<td style="text-align:left">Heavy</td>
<td style="text-align:left">Hard</td>
<td style="text-align:left">LinkedIn, Square</td>
</tr>
<tr>
<td style="text-align:left">Semantic‐UI</td>
<td style="text-align:left">2013</td>
<td style="text-align:left">Heavy</td>
<td style="text-align:left">Easy</td>
<td style="text-align:left">Xerox, Zendesk</td>
</tr>
<tr>
<td style="text-align:left">Svelte</td>
<td style="text-align:left">2016</td>
<td style="text-align:left">Light</td>
<td style="text-align:left">Easy</td>
<td style="text-align:left">Spotify, Square</td>
</tr>
<tr>
<td style="text-align:left">Foundation</td>
<td style="text-align:left">2011</td>
<td style="text-align:left">Heavy</td>
<td style="text-align:left">Hard</td>
<td style="text-align:left">eBay, National Geographic</td>
</tr>
<tr>
<td style="text-align:left">Preact</td>
<td style="text-align:left">2015</td>
<td style="text-align:left">Light</td>
<td style="text-align:left">Easy</td>
<td style="text-align:left">Uber, Comcast</td>
</tr>
</tbody>
</table>
</div></template>


