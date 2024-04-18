<template><div><h2 id="reszponziv-es-tetszetos-oldalak-letrehozasa" tabindex="-1"><a class="header-anchor" href="#reszponziv-es-tetszetos-oldalak-letrehozasa"><span>Reszponzív és tetszetős oldalak létrehozása</span></a></h2>
<p>Ebben a fejezetben megtudhatja, hogyan hozhat létre reszponzív és vonzó weboldalakat. Az oldalak reszponzívvá tételéhez olyan technikákat használhat, mint a relatív méretezés alkalmazása, a rugalmas pozicionálás megadása és a médialekérdezések hozzáadása. Az oldalak tetszetőssé tételéhez színátmeneteket és átmeneteket alkalmazhat, sprite-okat használhat, és kulcskép-animációkat hozhat létre.</p>
<h3 id="az-alkotashoz-szukseges-eszkozok-megertese" tabindex="-1"><a class="header-anchor" href="#az-alkotashoz-szukseges-eszkozok-megertese"><span>Az alkotáshoz szükséges eszközök megértése</span></a></h3>
<h3 id="responsive-pages-keszitese" tabindex="-1"><a class="header-anchor" href="#responsive-pages-keszitese"><span>Responsive Pages készítése</span></a></h3>
<p>A CSS egy eszközkészletet biztosít a reszponzív weboldalak létrehozásához, olyan weboldalakhoz, amelyeket úgy terveztek, hogy sikeresen alkalmazkodjanak a különböző képernyőméretekhez és eszközökhöz. Relatív méretezéssel engedélyezheti, hogy az elemek alkalmazkodjanak a rendelkezésre álló területhez. Rugalmas pozicionálással engedélyezheti, hogy a böngésző korlátozásokon belül átrendezze az elemeket. Az eszköz képességeit médialekérdezésekkel észlelheti, növelheti a koppintási cél méretét, és konfigurálhatja a nézetablakot. Az oldalakat különböző eszközökön és képernyőkön is tesztelnie kell
Ez a szakasz áttekintést nyújt ezekről az eszközökről és technikákról, és rámutat a fejezet későbbi szakaszaira, amelyek ezeket tárgyalják.</p>
<h3 id="relativ-meretezes" tabindex="-1"><a class="header-anchor" href="#relativ-meretezes"><span>Relatív méretezés</span></a></h3>
<p>A CSS lehetővé teszi fix vagy relatív méretezés megadását. A rögzített méretezés általában képpontokat használ, bár más egységek is rendelkezésre állnak. Például beállíthatja a div elem szélességi tulajdonságát 500 képpontra, így a böngésző 500 képpont szélességben jeleníti meg az elemet. A rögzített érték nem változik a különböző képernyőkön, így ami jól néz ki az asztali vagy laptop képernyőjén, az olvashatatlan lehet a telefon képernyőjén.
A relatív méretezés a rendelkezésre álló terület százalékos arányát vagy a relatív egységeket, például az ems-t és a rems-t használja. Az ems a szülőelemen alapuló betűméret, míg a rems a gyökérelem alapján történő betűméret mértékegysége. Például, ha a gyökérelem 16 pontos betűtípust használ, megadhatja a 2rem értéket, hogy 32 pontos betűtípust alkalmazzon egy elemre.
A relatív méretezéssel kapcsolatos további információkért tekintse meg a következő szakaszt: „Relatív méretezés alkalmazása”.</p>
<h3 id="rugalmas-pozicionalas" tabindex="-1"><a class="header-anchor" href="#rugalmas-pozicionalas"><span>Rugalmas pozicionálás</span></a></h3>
<p>A CSS lehetővé teszi, hogy különféle technikákat alkalmazzon az elemek rugalmas elhelyezésére az oldalakon. Lebegtethet egy elemet egy másik elemtől balra vagy jobbra. Megadhat egy elem relatív vagy abszolút pozicionálását. Létrehozhat Flexbox elrendezéseket is, amelyek lehetővé teszik a böngésző számára az elemek átrendezését az Ön által megadott megszorításokon belül.
Tekintse vissza a 9. fejezetet ezekről a témákról.</p>
<h3 id="mediakerdesek" tabindex="-1"><a class="header-anchor" href="#mediakerdesek"><span>Médiakérdések</span></a></h3>
<p>A CSS tartalmaz egy médialekérdezések nevű funkciót, amely lehetővé teszi, hogy megtudja, milyen típusú eszközön és milyen típusú kijelzőn jelenik meg egy weboldal. A „médialekérdezések” úgy hangzik, mintha újságírók keresnének egy történetet, de ebben az esetben a főszereplő Ön – vagy inkább a webhelye –, aki lekérdezi a látogató böngészőjét arról, hogy milyen típusú médiát használ az oldal megjelenítésére. Ezzel az információval különböző stílusokat határozhat meg a különböző képernyőtípusokhoz, így minden eszközre optimalizálhatja a weboldalt.
A médialekérdezések használatával kapcsolatos további információkért tekintse meg a fejezet későbbi részében a „Médialekérdezések hozzáadása oldalhoz” című részt.</p>
<h3 id="erintesi-celpontok" tabindex="-1"><a class="header-anchor" href="#erintesi-celpontok"><span>Érintési Célpontok</span></a></h3>
<p>Ha valaha is küzdöttél azzal, hogy egy apró gombot megérints egy weboldalon a telefonod képernyőjén, mint például a Bezárás (x) gombot, ami állítólag bezár egy nem kívánt hirdetést, akkor azonnal megérted az érintési célpontok fontosságát. Az érintési célpont egy elem kattintható területe, mint például egy gomb vagy egy link, egy weboldalon. Beállíthatod az érintési célpontok méretét a weboldalaidon a látogató által használt eszköznek megfelelően. Például általában megnöveled az érintési célpontok méretét, ha tudod, hogy a látogató érintőképernyőt használ, hogy könnyebb legyen megérinteni a célpontokat.
Az érintési célpontokról és beállításuk módjáról további információért tekintse meg a fejezet későbbi részében az „Érintési célpontok beállítása érintőképernyőkhöz” című részt.</p>
<h3 id="nezoablak-merete-es-viselkedese" tabindex="-1"><a class="header-anchor" href="#nezoablak-merete-es-viselkedese"><span>Nézőablak mérete és viselkedése</span></a></h3>
<p>A nézetablak a weboldal azon területe, amely a látogató eszközének böngészőjében látható – egy „képernyőnyi” weboldal vagy egy „ablaknyi” weboldal, ha úgy tetszik. A nézetablak mérete és tájolása a látogató által használt eszköztől függően változik. Például egy okostelefon nézetablaka lehet kicsi, álló tájolású, magasabb, mint széles; a laptop vagy az asztali számítógép nézetablakja általában nagyobb és fekvő – szélesebb, mint a magas –, de lehet álló vagy négyzet alakú is, attól függően, hogy a felhasználó hogyan méretezte meg az ablakot.
A CSS lehetővé teszi a nézetablak konfigurálását a HTML-dokumentum fejrészében a nézetablak metatagjának beállításával. A nézetablak méretének beállításával kapcsolatos további információkért lásd a „Nézetablak méretének beállítása” című részt ebben a fejezetben.</p>
<h3 id="ellenorizze-weboldalait-kulonbozo-eszkozokon-es-kepernyokon" tabindex="-1"><a class="header-anchor" href="#ellenorizze-weboldalait-kulonbozo-eszkozokon-es-kepernyokon"><span>Ellenőrizze weboldalait különböző eszközökön és képernyőkön</span></a></h3>
<p>Valószínűleg néhány látogató okostelefont, míg mások táblagépet, laptopot vagy asztali számítógépet használnak. Ezeknek az eszközöknek a képernyő mérete a kicsitől a hatalmasig, a felbontásuk pedig a szerénytől a rendkívül magasig terjedhet; egyesek álló tájolást, mások fekvő tájolást használnak, alkalmanként négyzet alakú képernyővel, hogy találgasson.
Annak érdekében, hogy weboldalai sikeresen megjelenjenek különböző méretű képernyőkön és eszközökön, tesztelnie kell őket különböző képernyőméreteken, hardvereszközök vagy szoftverszimulátorok segítségével.
A témával kapcsolatos további információkért tekintse meg a fejezet későbbi részében az „Oldalak ellenőrzése különböző eszközökön és képernyőkön” című részt.</p>
<h3 id="relativ-meretezes-alkalmazasa" tabindex="-1"><a class="header-anchor" href="#relativ-meretezes-alkalmazasa"><span>Relatív méretezés alkalmazása</span></a></h3>
<p>Ahhoz, hogy weboldalaid reszponzívak legyenek, használj inkább relatív méretezést, mint fix méretezést a méret megadásához. Az oldalakon lévő elemek méretének meghatározásához. A relatív méretezés arányos mértékegységeket használ, például százalékokat vagy remeket, ahelyett, hogy fix pixelértékeket használna. A relatív méretezés lehetővé teszi, hogy az oldal simán méretezhető legyen, és alkalmazkodjon a különböző eszközökhöz és képernyőméretekhez.
Egy elem százalékos méretezéséhez adja meg a százalékos arányt - akár a nézetablak, akár az elem szülőelemének - az elemnek ki kell foglalnia. Például beállíthat egy konténer elem szélességét 75%-ra állíthatjuk be, hogy az elem a nézetablak szélességének háromnegyedét foglalja el.</p>
<h3 id="a-relativ-meretezes-elonyei-a-fix-meretezessel-szemben" tabindex="-1"><a class="header-anchor" href="#a-relativ-meretezes-elonyei-a-fix-meretezessel-szemben"><span>A relatív méretezés előnyei a fix méretezéssel szemben</span></a></h3>
<p>A weboldalak relatív méretezésének négy fő előnye van a fix méretezéssel szemben:</p>
<ul>
<li>A relatív méretezés növeli a rugalmasságot. A relatív méretezés használatával olyan weboldalakat hozhat létre, amelyek alkalmazkodnak a következőkhöz különböző képernyőméretekhez és eszközökhöz. Ez a rugalmasság lehetővé teszi a látogatók számára, hogy a weboldalakat az Ön szándéka szerint nézzék meg. megjeleníteni azokat, függetlenül attól, hogy milyen eszközöket használnak.</li>
<li>A relatív méretezés reszponzív tervezést valósít meg. A relatív méretezéssel reszponzív weboldalakat hozhat létre. amelyek tartalma és elrendezése dinamikusan igazodik az egyes látogatók képernyőméretéhez és tájolásához eszközhöz.</li>
<li>A relatív méretezés javítja a hozzáférhetőséget. A látogatók testre szabhatják a weboldalak megjelenítését, hogy elkerüljék a hozzáférhetőségi problémákat. Például egy látásproblémákkal küzdő látogató növelheti a betűméretet, hogy az oldal könnyebben olvashatóvá tegye.</li>
<li>A relatív méretezés növeli a konzisztenciát. A relatív méretezés használatával biztosíthatja, hogy az oldalai egy konzisztens megjelenést és élményt nyújtanak a különböző eszközökön és képernyőméreteken. Ez a következetesség a jobb felhasználói élményt nyújt, és növelheti a látogatók elkötelezettségét.</li>
</ul>
<h3 id="a-relativ-meretezes-alkalmazasahoz-szukseges-meresek-megertese" tabindex="-1"><a class="header-anchor" href="#a-relativ-meretezes-alkalmazasahoz-szukseges-meresek-megertese"><span>A relatív méretezés alkalmazásához szükséges mérések megértése</span></a></h3>
<p>A CSS öt fő mértékegységet biztosít a relatív méretezés alkalmazásához:</p>
<ul>
<li><strong>em</strong>: A digitális tipográfiában az <code v-pre>em</code> egy elem szülőelemének betűmérete. Például, ha a szülőegység 16 pixel méretű betűt használ, 1 <code v-pre>em</code> értéke 16 px. A kifejezés a hagyományos nyomtatásból származik, ahol egy <code v-pre>em</code> az adott betűtípusban egy M betű szélessége; egy <code v-pre>em</code> kötőjel, —, az adott betűtípusban az M betű szélessége, és egy <code v-pre>em</code> tér az M betű szélessége.</li>
<li><strong>rem</strong>: Az <code v-pre>em</code> egy gyökér <code v-pre>em</code>, azaz az <code v-pre>em</code> az dokumentum gyökérelemére alapul, nem pedig az elem szülőelemére, amelyet formázol. A gyökérelem az <code v-pre>html</code> elem a dokumentumban, hacsak ez az elem hiányzik vagy - valószínűbben - hibásan van megadva, például nem megfelelően van lezárva. Ha nincs érvényes <code v-pre>html</code> elem, a böngésző a <code v-pre>body</code> elemet kezeli gyökérelemként. Ha a <code v-pre>body</code> elem is hiányzik vagy hibásan van megadva, a <code v-pre>rem</code> méretezés nem fog megfelelően működni.</li>
<li><strong>%</strong>: A százalékos méretezés lehetővé teszi egy elem méretének az alapját képezni a szülőelem méretéből. Például, ha a szülőelem 600 pixel széles, és megadod a <code v-pre>width: 50%;</code> tulajdonságot, az elem 300 pixel széles lesz.</li>
<li><strong>vw és vh</strong>: Az <code v-pre>vw</code> egység a nézetablak szélességén alapul, míg az <code v-pre>vh</code> egység a nézetablak magasságán alapul. A teljes szélesség 100vw, és a teljes magasság 100vh, tehát ha 50vw-t állítasz be, az a nézetablak szélességének felét jelenti, és ha 50vh-t, az a nézetablak magasságának felét jelenti.</li>
</ul>
<h3 id="peldak-a-relativ-meretezes-alkalmazasara" tabindex="-1"><a class="header-anchor" href="#peldak-a-relativ-meretezes-alkalmazasara"><span>Példák a relatív méretezés alkalmazására</span></a></h3>
<p>A dokumentumokban való relatív méretezés alkalmazásához használj em méretezést vagy rem méretezést a betűkhöz.
Ha a gyökérelem alapján szeretnél méretezni, akkor használd a rem méretezést. Első lépésként állítsd be a betűméret tulajdonságot az html elemre a CSS fájlodban. Az alábbi példa 16 pixeles betűt állít be az html elemre:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Miután ezt megtetted, más elemek betűméretét ennek alapján állíthatod be. Az alábbi példa <code v-pre>1.5rem</code>-et állít be a <code v-pre>h2</code> elemre, ami 24 pixeles betűméretet eredményez:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">h2</span> <span class="token punctuation">{</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 1.5rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ha az elemek betűméretét szeretnéd a szülőelemek méretéhez viszonyítani, használd az em méretezést. Az alábbi példa egy <code v-pre>.parent</code> osztályt definiál 20 pixeles betűmérettel és egy <code v-pre>.child</code> osztályt <code v-pre>0.8em</code> betűmérettel, ami 16 pixeles betűméretet eredményez:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">.child</span> <span class="token punctuation">{</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 0.8em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Az elemek méretének beállításához a nézetablak méreteihez használj <code v-pre>vw</code> és <code v-pre>vh</code> egységeket. Az alábbi példa egy <code v-pre>div</code> elemet állít be a nézetablak szélességének felére és magasságának háromnegyedére:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 50vw<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 75vh<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ha egy elem méretét a szülőelem méreteihez szeretnéd igazítani, használj %-os mértékegységeket. Az alábbi példa egy <code v-pre>div</code> elemet állít be a szülőelem szélességének felére:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="media-lekerdezesek-hozzaadasa-egy-oldalhoz" tabindex="-1"><a class="header-anchor" href="#media-lekerdezesek-hozzaadasa-egy-oldalhoz"><span>Média lekérdezések hozzáadása egy oldalhoz</span></a></h2>
<p>A CSS média lekérdezések lehetővé teszik a képernyő méretének, felbontásának és színmélységének megismerését, amelyet a weboldalt kérő eszköz használ. Megtanulhatod az eszköz bemeneti metódusát – például egy mutatóeszköz vagy érintőképernyő. A média lekérdezések által visszaadott információkat felhasználhatja olyan szabályok végrehajtásához, amelyek meghatározzák, hogy a weboldal hogyan jelenjen meg a különböző képernyőkön, méretben, vagy különböző eszközökön. A média lekérdezések segítségével olyan weboldalakat hozhat létre, amelyek alkalmazkodnak és reagálnak a látogató eszközéhez, és jó megjelenítési élményt nyújtanak rajta.</p>
<h3 id="a-media-lekerdezesek-szintaxisanak-megertese" tabindex="-1"><a class="header-anchor" href="#a-media-lekerdezesek-szintaxisanak-megertese"><span>A média lekérdezések szintaxisának megértése</span></a></h3>
<p>A média lekérdezések általános szintaxisa a következőképpen néz ki:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@media</span> mediatype <span class="token keyword">and</span> <span class="token punctuation">(</span>media feature<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    CSS style to apply
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Íme a szintaxis összetevői:</p>
<ul>
<li><strong>@media</strong>: Ez az a kulcskifejezés, amellyel a médiakérdést elindíthatja.</li>
<li><strong>mediatype</strong>: Ez a paraméter adja meg a lekérdezés által érintett médiatípust. Használjon <code v-pre>screen</code>-t eszköz képernyőkhöz, <code v-pre>speech</code>-t a képernyőolvasókhoz, vagy a nyomtatott dokumentumokhoz a <code v-pre>print</code>-et.</li>
<li><strong>Media feature</strong>: Ez a paraméter a tesztelendő állapotot adja meg. A 10-1. Táblázat mutatja a legelterjedtebb médiajellemzőket.</li>
<li><strong>CSS style to apply</strong>: Ez a paraméter adja meg az alkalmazandó CSS stílust, abban az esetben ha a média lekérdezés True értéket ad vissza.</li>
</ul>
<table>
<thead>
<tr>
<th></th>
<th>10-1. táblázat: Médiafunkciók a média lekérdezésekhez:</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Média funkció</strong></td>
<td><strong>Magyarázat</strong></td>
</tr>
<tr>
<td>width</td>
<td>A nézetablak szélessége pixelben</td>
</tr>
<tr>
<td>height</td>
<td>A nézetablak magassága, pixelben</td>
</tr>
<tr>
<td>min-width</td>
<td>A nézetablak minimális szélessége képpontokban</td>
</tr>
<tr>
<td>max-width</td>
<td>A nézetablak maximális szélessége képpontokban</td>
</tr>
<tr>
<td>min-height</td>
<td>A nézetablak minimális magassága képpontokban</td>
</tr>
<tr>
<td>max-height</td>
<td>A nézetablak maximális magassága képpontokban</td>
</tr>
<tr>
<td>aspect-ratio</td>
<td>A nézetablak képaránya, a szélességének és a magasságának aránya</td>
</tr>
<tr>
<td>min-aspect-ratio</td>
<td>A nézetablak minimális képaránya</td>
</tr>
<tr>
<td>max-aspect-ratio</td>
<td>A nézetablak maximális képaránya</td>
</tr>
<tr>
<td>orientation</td>
<td>A nézetablak tájolása, <em>landscape</em> vagy <em>portrait</em></td>
</tr>
<tr>
<td>color</td>
<td>A csatornánkénti színmélység, például 8 vagy 16</td>
</tr>
<tr>
<td>color-index</td>
<td>A készülék képernyője által megjeleníthető színek száma</td>
</tr>
<tr>
<td>resolution</td>
<td>A képernyő pixelsűrűsége</td>
</tr>
<tr>
<td>scan</td>
<td>A képernyő szkennelési folyamata, akár <em>interlace</em>, akár <em>progressive</em></td>
</tr>
<tr>
<td>grid</td>
<td>Rácsalapú kijelzővel rendelkezik-e a képernyő</td>
</tr>
<tr>
<td>pointer</td>
<td>A készülék mutatási módszerének hozzávetőleges pontossága, például fine, coarse, vagy none</td>
</tr>
<tr>
<td>any-pointer</td>
<td>Rendelkezik-e a készülék valamilyen beviteli mechanizmussal</td>
</tr>
<tr>
<td>hover</td>
<td>Támogatja-e az elsődleges beviteli mechanizmus a lebegő interakciókat</td>
</tr>
<tr>
<td>any-hover</td>
<td>Támogatja-e valamelyik beviteli mechanizmus a lebegő interakciókat</td>
</tr>
</tbody>
</table>
<h2 id="media-lekerdezesek-pelda-betuformazas-modositasa-kisebb-kepernyokhoz" tabindex="-1"><a class="header-anchor" href="#media-lekerdezesek-pelda-betuformazas-modositasa-kisebb-kepernyokhoz"><span>Média lekérdezések példa: Betűformázás módosítása kisebb képernyőkhöz</span></a></h2>
<p>A média lekérdezések segítségével megváltoztathatja egy elem betűtípus-formázását, hogy az elem olvashatóbbá váljon a kisebb képernyőkön. Ez a példa a betűméret megváltoztatását mutatja, de más módosításokat is végezhet, például nagyobb betűsúlyt vagy olyan színt használhat, amely jobban kiemelkedik a háttérből.</p>
<p>A CSS fájlod tartalmazhat olyan stílusokat, mint a következő a <code v-pre>h1</code> elem és a <code v-pre>h2</code> elem rendes méretű képernyőkön:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token comment">/* h1 style for standard screens */</span>
<span class="token selector">h1</span> <span class="token punctuation">{</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* h2 style for standard screens */</span>
<span class="token selector">h2</span> <span class="token punctuation">{</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 24px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Egy média lekérdezéssel ellenőrizheti a 600 pixeles maximális szélességű képernyőket, és átválthat egy nagyobb betűméretre:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token comment">/* h1 and h2 styles for smaller screens */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
	<span class="token selector">h1</span> <span class="token punctuation">{</span>
		<span class="token property">font-size</span><span class="token punctuation">:</span> 36px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token selector">h2</span> <span class="token punctuation">{</span>
		<span class="token property">font-size</span><span class="token punctuation">:</span> 28px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="erintesi-celok-beallitasa-erintokepernyokhoz" tabindex="-1"><a class="header-anchor" href="#erintesi-celok-beallitasa-erintokepernyokhoz"><span>Érintési célok beállítása érintőképernyőkhöz</span></a></h2>
<p>A CSS lehetővé teszi a tap targetek, azaz az elemek, például a gombok és linkek kattintható területeinek méretének meghatározását. Az oldalak reszponzívvá tétele érdekében a tap targetek méretét a képernyőhöz méretéhez igazíthatja és a látogató által használt eszköz típusához. Például, ha a látogató okostelefonon használja az érintőképernyőt, akkor általában megnöveli a tap targetek méretét, hogy könnyebben megérintse őket. Lehetőséged van arra is, hogy az érintési célpontokat könnyebben láthatóvá tedd, és hozzáadhatsz egy hover hatást, hogy megmutasd, mikor érintik őket.</p>
<h3 id="lasd-az-erinto-celpontok-formazasanak-elonyeit" tabindex="-1"><a class="header-anchor" href="#lasd-az-erinto-celpontok-formazasanak-elonyeit"><span>Lásd az érintő célpontok formázásának előnyeit</span></a></h3>
<p>Az érintő célpontok formázásával elérheti, hogy kisebb képernyőkön sokkal könnyebben legyen használható az érintőképernyő, mint az egér vagy más mutatóeszközök használata esetén.</p>
<p>Például, van egy űrlapunk, amely tartalmazza a következő ábrán látható vezérlőelemeket: több gomb és egy link. Ez a távolság jó egy asztali számítógéphez egérrel vagy trackpaddal rendelkező laptopon, de a gombok kényelmetlenül kicsik az érintőképernyő használatához.</p>
<p>A 11. fejezet a formák és azok vezérlését részletesen tárgyalja.</p>
<figure><img src="@source/demo/images/10-fejezet/234_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="parnazas-hozzaadasa-az-erinto-celpontok-tomegenek-novelesehez" tabindex="-1"><a class="header-anchor" href="#parnazas-hozzaadasa-az-erinto-celpontok-tomegenek-novelesehez"><span>Párnázás hozzáadása az érintő célpontok tömegének növeléséhez</span></a></h3>
<p>Ezután az érintő célpontokat bővíthetjük némi kitöltéssel. A következő CSS kód példát mutat:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token comment">/* Add padding to bulk up the tap
targets */</span>
<span class="token selector">a,
button,
input[type="button"],
input[type="submit"]</span> <span class="token punctuation">{</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ez az ábra mutatja a párnázás alkalmazását:</p>
<figure><img src="@source/demo/images/10-fejezet/234_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="minimalis-meret-alkalmazasa-az-erinto-celpontokra" tabindex="-1"><a class="header-anchor" href="#minimalis-meret-alkalmazasa-az-erinto-celpontokra"><span>Minimális méret alkalmazása az érintő célpontokra</span></a></h3>
<p>Első lépésként alkalmazhatna egy minimális méretet az érintő célpontokra. A World Wide Web Consortium (W3C) 44×44 pixeles minimális méretet javasol az érintőképernyős eszközök érintő célpontjaira.</p>
<p>A következő CSS-kód ezt a minimális méretet alkalmazza:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token comment">/* Set a minimum size of 44x44 pixels
for all tap targets */</span>
<span class="token selector">a,
button,
input[type="button"],
input[type="submit"]</span> <span class="token punctuation">{</span>
	<span class="token property">min-width</span><span class="token punctuation">:</span> 44px<span class="token punctuation">;</span>
	<span class="token property">min-height</span><span class="token punctuation">:</span> 44px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ez az ábra mutatja a minimális méret alkalmazását:</p>
<figure><img src="@source/demo/images/10-fejezet/234_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="margoter-hozzaadasa-erinto-celpontok-kozott" tabindex="-1"><a class="header-anchor" href="#margoter-hozzaadasa-erinto-celpontok-kozott"><span>Margótér hozzáadása érintő célpontok között</span></a></h3>
<p>Az érintési célpontok most már megfelelő méretűek, de a link talán kényelmetlenül az alján a gombok közelében van. Ha üres helyet szeretne elhelyezni közöttük, akkor a tap targetek alatt egy kis helyet hagyhatnánk, mint a következő CSS-kódban:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token comment">/* Add margin to provide vertical
separation */</span>
<span class="token selector">a,
button,
input[type="button"],
input[type="submit"]</span> <span class="token punctuation">{</span>
	<span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ez az ábra mutatja a margótér hozzáadásának hatását:</p>
<figure><img src="@source/demo/images/10-fejezet/234_4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="az-erinto-celpontok-szeleinek-formazasa" tabindex="-1"><a class="header-anchor" href="#az-erinto-celpontok-szeleinek-formazasa"><span>Az érintő célpontok széleinek formázása</span></a></h3>
<p>A gombok, mint például a Beküldés gomb és a Visszaállítás gomb, automatikusan kapnak keretet a legtöbb böngészőkben, de a hiperhivatkozások nem. Ahhoz, hogy az összes vezérlőelemek könnyebben láthatóak legyenek a kis képernyőn, akkor erősebb keretet alkalmazhat, mint az alábbiakban látható CSS-kódban:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token comment">/* Format the border of the tap
targets */</span>
<span class="token selector">a,
button,
input[type="button"],
input[type="submit"]</span> <span class="token punctuation">{</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 2px solid black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ez az illusztráció a széleket mutatja. Az érintő célpont a hiperhivatkozáshoz tisztán látható.</p>
<figure><img src="@source/demo/images/10-fejezet/235_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="az-erinto-celpont-szinenek-megvaltoztatasa-lebegteteskor" tabindex="-1"><a class="header-anchor" href="#az-erinto-celpont-szinenek-megvaltoztatasa-lebegteteskor"><span>Az érintő célpont színének megváltoztatása lebegtetéskor</span></a></h3>
<p>Lehetőséged van arra is, hogy megváltoztasd az érintési célpontok színét, amikor a látogató az egérmutatót ráhelyezi vagy röviden megérinti őket egy érintőképernyőn anélkül, hogy érintést hajtana végre. A következő CSS-kód erre mutat példát:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token comment">/* Change the tap target color on
hover */</span>
<span class="token selector">a:hover,
button:hover,
input[type="button"]:hover,
input[type="submit"]:hover</span> <span class="token punctuation">{</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> cyan<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ez az ábra azt mutatja, hogyan változik egy érintő célpont színe, amikor a mutató fölé mozog.</p>
<figure><img src="@source/demo/images/10-fejezet/235_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="az-erinto-celpontok-hatterenek-formazasa" tabindex="-1"><a class="header-anchor" href="#az-erinto-celpontok-hatterenek-formazasa"><span>Az érintő célpontok hátterének formázása</span></a></h3>
<p>Az érintő célpontot is formázhatja a kontraszt növelése érdekében, mint a következő CSS-kódban:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token comment">/* Give the tap targets a white
background */</span>
<span class="token selector">a,
button,
input[type="button"],
input[type="submit"]</span> <span class="token punctuation">{</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ez az ábra az érintő célpontokat mutatja a fehér háttérrel.</p>
<figure><img src="@source/demo/images/10-fejezet/235_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="az-erintesi-cel-szinenek-modositasa-erinteskor" tabindex="-1"><a class="header-anchor" href="#az-erintesi-cel-szinenek-modositasa-erinteskor"><span>Az érintési cél színének módosítása érintéskor</span></a></h3>
<p>Az érintő célpontok színét is megváltoztathatja amikor a látogató megérinti vagy rájuk kattint. Ez a visszajelzés segít a látogatónak abban, hogy észrevegye, hogy az érintés vagy kattintás regisztrálódott-e. A következő CSS-kód egy példát mutat be:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token comment">/* Change the target color when tapped
or clicked */</span>
<span class="token selector">a:active,
button:active,
input[type="button"]:active,
input[type="submit"]:active</span> <span class="token punctuation">{</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ez az ábra azt mutatja, hogyan változik egy érintési célpont színe, amikor a látogató megérinti vagy rákattint.</p>
<figure><img src="@source/demo/images/10-fejezet/235_4.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="a-nezetablak-meretenek-beallitasa" tabindex="-1"><a class="header-anchor" href="#a-nezetablak-meretenek-beallitasa"><span>A nézetablak méretének beállítása</span></a></h2>
<p>A nézetablak a weboldalnak az a területe, amely a látogató eszközén a böngészőben látható. A CSS lehetővé teszi számodra, hogy konfiguráld a nézetablakot a weboldal <code v-pre>head</code> részében, azáltal, hogy beállítod a <code v-pre>viewport</code> meta tag tartalmát a <code v-pre>content</code> tulajdonságával. A megfelelő beállítások kiválasztásával a weblap megjeleníthetővé teheti az egyes látogatók által használt eszköz képernyőjének megfelelő módját.</p>
<p>A 10-2. táblázat ismerteti a <code v-pre>viewport</code> meta tag <code v-pre>content</code> tulajdonságához használható beállításait</p>
<table>
<thead>
<tr>
<th></th>
<th>10-2. táblázat: A viewport Meta Tag content tulajdonságának beállításai</th>
</tr>
</thead>
<tbody>
<tr>
<td>Tulajdonság</td>
<td>Magyarázat</td>
</tr>
<tr>
<td>width</td>
<td>Megadja a nézetablak szélességét. Beállíthat egy adott pixelszámot, vagy használhatja a <em>device-width</em> használatával az eszköz szélességét.</td>
</tr>
<tr>
<td>height</td>
<td>Megadja a nézetablak magasságát. Beállíthat egy adott pixelszámot, vagy használhatja a <em>device-height</em> használatával az eszköz magasságát.</td>
</tr>
<tr>
<td>initial-scale</td>
<td>Megadja a kezdeti nagyítási szintet az oldal betöltésekor. Például, a <em>initial-scale=1</em> használatával a nagyítási szint 100 százalékra állítható.</td>
</tr>
<tr>
<td>minimum-scale</td>
<td>Megadja az oldal minimálisan megengedett nagyítási szintjét. Például, a <em>minimum-scale=0.5</em> használatával 50 százalékos nagyítást engedélyezhet.</td>
</tr>
<tr>
<td>maximum-scale</td>
<td>Megadja az oldal maximálisan megengedett nagyítási szintjét. Például, a <em>maximum-scale=2</em> használatával 200 százalékos nagyítást engedélyezhet.</td>
</tr>
<tr>
<td>user-scalable</td>
<td>Szabályozza, hogy a felhasználó nagyíthat-e vagy kicsinyíthet-e az oldalon. Ezt beállíthatja <em>yes</em>-re vagy <em>no</em>-ra.</td>
</tr>
<tr>
<td>fullscreen</td>
<td>Ezt a beállítást <em>yes</em> értékre állíthatod a teljes képernyős mód engedélyezéséhez, <em>no</em> értékre a teljes képernyős mód letiltásához, <em>minimal-ui</em> értékre, hogy minimális felhasználói felület jelenjen meg, amikor az oldal belép a teljes képernyős módba, vagy <em>browser</em> értékre, hogy a böngésző felhasználói felülete jelenjen meg, amikor az oldal belép a teljes képernyős módba. Nem minden böngésző támogatja a <em>fullscreen</em> beállítást, és a <em>minimal-ui</em> érték elavult; azaz, már nem ajánlott a használata.</td>
</tr>
<tr>
<td>shrink-to-fit</td>
<td>Összezsugorítja az oldal tartalmát a képernyő szélességéhez. Megadhatod a <em>yes</em> értéket a tartalom összeméretezéséhez, vagy a <em>no</em> értéket, hogy a tartalom túllépje a képernyő szélességét.</td>
</tr>
<tr>
<td>viewport-fit</td>
<td>Szabályozza, hogy a nézetablak hogyan illeszkedjen a képernyőre; a beállítások között szerepel a <em>cover</em>, <em>contain</em>, <em>auto</em> és <em>100%</em>.</td>
</tr>
<tr>
<td>target-densitydpi</td>
<td>Megadja a céleszköz pixelsűrűségét. Ez a beállítás elavult, így ezért ne használja többé.</td>
</tr>
<tr>
<td>viewport-initial-scale</td>
<td>Megadja a nézetablak kezdeti nagyítási szintjét. Az alapértelmezett érték <em>1.0</em>, ami 100 százalékos nagyítást alkalmaz - normál méretben.</td>
</tr>
<tr>
<td>viewport-minimum-scale</td>
<td>Megadja a nézetablak minimális nagyítási szintjét. Az alapértelmezett érték <em>0,25</em>, lehetővé teszi a felhasználó számára, hogy a normál méret 25 százalékára kicsinyítsen.</td>
</tr>
<tr>
<td>viewport-maximum-scale</td>
<td>Megadja a nézetablak maximális nagyítási szintjét. Az alapértelmezett érték <em>5.0</em>, ami a felhasználó a normál méret 500 százalékára nagyíthat.</td>
</tr>
<tr>
<td>viewport-user-scalable</td>
<td>Szabályozza, hogy a felhasználó nagyíthat-e vagy kicsinyíthet-e a nézetablakon. Beállíthatja, <em>yes</em>-re, hogy engedélyezze a zoomolást, <em>no</em>-ra, hogy ne engedélyezze a zoomolást, vagy <em>1</em>-re, hogy engedélyezze a felhasználónak a zoomolást, de csak addig zoomoljon, amíg az oldal el nem éri az eredeti méretét.</td>
</tr>
<tr>
<td>overscroll-behavior</td>
<td>Meghatározza, hogyan viselkedjen a nézetablak, amikor a felhasználó <em>overscrolls</em>-t használ - amikor megpróbál a tartalom végére görgetni. Használja az <em>auto</em> lehetőséget, hogy a böngésző vezérelje a túlgörgetés viselkedését. Használj <em>contain</em> parancsot az átlós görgetés megakadályozásához a tartományon kívül, lehetővé téve így a szülőelemek részeinek megjelenítését .A <em>none</em> használatával teljesen letiltja a túlgördülést.</td>
</tr>
</tbody>
</table>
<p>Az <code v-pre>initial-scale</code> beállítása, <code v-pre>minimum-scale</code> beállítása és a <code v-pre>maximum-scale</code> beállítása befolyásolja a weboldalát. A <code v-pre>viewport-initial-scale</code> beállítás, a <code v-pre>viewport-mninimum-scale</code> beállítás és a <code v-pre>viewport-maximum-scale</code> beállítás csak a megjelenő oldalon látszódik.
Alapvetően az <code v-pre>initial-scale</code> beállításnál be kell állítani az alap zoomolást ahhoz, hogy beállíthasd a magasságot, szélességet, a helyett, hogy a <code v-pre>viewport-initial-scale</code>, <code v-pre>viewport-minimum-scale</code>, vagy a <code v-pre>viewport-maximum-scale</code>-t használná.</p>
<p>Több oldalon keresztül, simán bellíthatja a viewport szélességét a készülék szélességéhez:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Pár oldalhoz beállíthatja a viewport magasságot a készülék magasságához:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>height=device-height<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Néhány esetben meg kell adnia a magasságot és a szélességet is:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=500, height=700<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="ellenorizd-az-oldalaidat-kulonbozo-eszkozokon-es-kijelzokon" tabindex="-1"><a class="header-anchor" href="#ellenorizd-az-oldalaidat-kulonbozo-eszkozokon-es-kijelzokon"><span>Ellenőrizd az oldalaidat különböző eszközökön és kijelzőkön.</span></a></h2>
<p>A weboldala látogatói különböző típusú eszközöket használnak, számítógépeket, laptopokat, tableteket, okostelefonokat - valamint vr headset-eket is. Ezeknek az eszközöknek különböző méretű a képernyőjük, felbontásuk valamint orientációjuk is. Ezek befolyásolják az elrendezést, betűméretet és a weboldala funkcióját is. Ellenőrizze a weboldalát különböző méretben, különböző készülékeken. Ha ezt csinálja akkor könnyen rábukkan hibákra, például elolvashatatlan kicsi szövegekre is.</p>
<h3 id="ertekelje-a-latogatok-eszkozeit-es-kepernyomereteit" tabindex="-1"><a class="header-anchor" href="#ertekelje-a-latogatok-eszkozeit-es-kepernyomereteit"><span>Értékelje a látogatók eszközeit és képernyőméreteit</span></a></h3>
<p>Amennyire csak lehetséges, próbálja meg meghatározni, hogy a weboldalának látogatói milyen eszközöket és képernyőméreteket használnak leginkább.
Először talán okos becsléseket kell végezned, de miután az oldalad már fut, részletes adatokat kaphatsz a Google Analytics-ből.</p>
<p>Jelentkezzen be a Google Analytics-fiókjába, majd kattintson a bal oldali navigációs ablakban a <strong>Reports</strong> ( ) gombra, hogy megjelenjen a Jelentések ablaktábla. Kattintson a <strong>Tech</strong> címszóra a tartalom kibontásához, majd kattintson a Tech alatt található <strong>Overview</strong> elemre, majd nézze meg a különböző hisztogramokat és kijelzéseket: Felhasználók platformok szerint, Felhasználók operációs rendszer szerint, Felhasználók platform/készülékkategória szerint, Felhasználók képernyőfelbontás szerint, Felhasználók készülékmodell szerint stb.</p>
<h3 id="weboldalak-tesztelese-hardveres-eszkozokon" tabindex="-1"><a class="header-anchor" href="#weboldalak-tesztelese-hardveres-eszkozokon"><span>Weboldalak tesztelése hardveres eszközökön</span></a></h3>
<p>Miután meghatároztad, hogy a látogatók milyen eszközöket, böngészőket és képernyőméreteket részesítenek előnyben, gyűjts össze olyan széles körű teszteszközöket, amennyit csak tudsz. Nézze meg, mit tud kihámozni a vállalata műszaki temetőjéből vagy a családja szemétdombjáról. Ideális esetben egy iPhone és egy Android telefon a kisképernyős teszteléshez, egy iPad és egy Windows táblagép pedig a közepes képernyős teszteléshez, és egy régi laptop és valamilyen Mac a nagyképernyős teszteléshez. Azonban Chrome vagy Firefox fejlesztőeszközökkel szimulálhat olyan eszközöket, amelyekkel nem rendelkezik, ahogyan azt a következő fejezetben tárgyaltuk. Továbbá találhatsz online felhőalapú tesztelési szolgáltatásokat is, amelyek széles választékban kínálnak szimulátorokat és fizikai eszközöket.</p>
<p>Frissítsd az operációs rendszert minden eszközön, hogy naprakésszé vagy a lehető legközelebbi állapotba hozd azt. Frissítsd a beépített böngészőket is, és telepítsd a látogatóid által kedvelt más böngészőket is.</p>
<p>Csatlakoztass egy második monitort a teszt laptopodhoz vagy asztali számítógépedhez, majd forgasd el portré módra, így könnyebben megtekintheted az oldalakat mind vízszintes, mind függőleges tájolásban.</p>
<p>Most már készen állsz az oldalaid tesztelésére. Amikor tesztelsz okostelefonokon és táblagépeken, váltogasd az eszközöket portré és tájkép tájolás között, hogy megbizonyosodj arról, hogy a Bluetooth megfelelően működik.</p>
<h3 id="teszteld-az-oldalakat-a-chrome-fejlesztoi-eszkozeinek-segitsegevel" tabindex="-1"><a class="header-anchor" href="#teszteld-az-oldalakat-a-chrome-fejlesztoi-eszkozeinek-segitsegevel"><span>Teszteld az oldalakat a Chrome fejlesztői eszközeinek segítségével.</span></a></h3>
<p>Mind a Google Chrome, mind a Mozilla Firefox fejlesztői eszközöket tartalmaz, amelyek lehetővé teszik különböző képernyőméretek, tájolások és eszközök emulálását. Ezek az eszközök egy másik lehetőséget kínálnak az oldalaid tesztelésére, különösen hasznosak, ha csak korlátozott választékban áll rendelkezésre hardver a teszteléshez. Ez a rész bemutatja a Chrome fejlesztői eszközeit, a Firefox fejlesztői eszközeinek felfedezésére pedig rád bízza a feladatot.</p>
<figure><img src="@source/demo/images/10-fejezet/239.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>Indítsd el a Chrome-ot a számítógépeden szokás szerint, majd nyisd meg azt a weboldalt, amelyet tesztelni szeretnél. Jobb kattintással a lapra jelenítsd meg a kontextusmenüt, majd kattints az ellenőrzés opcióra, hogy megjelenítsd a fejlesztői eszközöket. Ezután kattints az Eszköztárra (A, változik ) az eszköztár megjelenítéséhez; alternatív módon nyomd meg a Ctrl + Shift + M billentyűkombinációt Windows vagy Linux rendszeren, vagy a ⌘ + Shift + M kombinációt Mac rendszeren az eszköztár megjelenítéséhez.</p>
<p>Az Eszköztár <code v-pre>B)</code> megjelenik a közvetlen előnézet ablak felett.
Kattints a Méretek lenyíló menü gombra <code v-pre>C)</code>, hogy megjelenítsd az eszközök menüjét.
Itt kiválaszthatod az eszközt, amelyet szimulálni szeretnél, vagy kattinthatsz a Szerkesztés <code v-pre>D)</code> gombra, hogy megjelenítsd a Chrome fejlesztői eszközök beállításainak Emulált Eszközök kategóriáját, ahol más meglévő eszközöket választhatsz ki a menühöz, vagy kattinthatsz a Egyedi eszköz hozzáadása gombra, hogy egy olyan egyedi eszközt adj hozzá, amelynek beállításait te határozod meg.</p>
<figure><img src="@source/demo/images/10-fejezet/239-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/demo/images/10-fejezet/239-3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>A harmadik ábrán az látható, hogy mi történik, ha az iPad Air (E) opcióra kattintasz a menüben: egy szimuláció jelenik meg, ami megmutatja, hogyan fog kinézni az oldal az iPad Air kijelzőjén. Ahhoz, hogy hozzáadd az időzítőket, amint az a képen látható, kattints a Menü ( ) gombra, majd kattints az Időzítők megjelenítése opcióra a menüben. A menü lehetővé teszi továbbá a készülék keretének és média lekérdezések megjelenítésének váltását, valamint a készülék képpont arányának hozzáadását.</p>
<h2 id="a-css-gradiensek-mukodesenek-megertese" tabindex="-1"><a class="header-anchor" href="#a-css-gradiensek-mukodesenek-megertese"><span>A CSS gradiensek működésének megértése</span></a></h2>
<p>A CSS által a weboldalak felépítéséhez és javításához kínált különféle eszközök közül a színátmenetek nagyszerű lehetőséget jelentenek arra, hogy vizuális érdeklődést kölcsönözzenek a terveknek. A CSS segítségével könnyedén hozhat létre színátmeneteket, sima átmeneteket két vagy több szín között. Létrehozhat lineáris vagy radiális színátmeneteket. A színátmeneteket különféle célokra használhatja, például hátteret biztosíthat a tervezési elemek, például a gombok vagy fejlécek megtalálásához.</p>
<h3 id="mik-a-linearis-gradiensek" tabindex="-1"><a class="header-anchor" href="#mik-a-linearis-gradiensek"><span>Mik a lineáris gradiensek?</span></a></h3>
<p>A színátmenet olyan színminta, amely egyenletes átmenetet hoz létre több szín között. A lineáris gradiens színei egyenes vonalban helyezkednek el egyik ponttól a másikig. Például az első lineáris gradiens a bal oldali vörösről a jobb oldali lilára való átmenetet mutatja.</p>
<p>Igény szerint további színeket is hozzáadhat. Például a második lineáris gradiens kéket ad a piros és az ibolya közé.</p>
<p>A harmadik lineáris gradiens pedig a teljes szivárványt futja.</p>
<figure><img src="@source/demo/images/10-fejezet/240.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="ismerje-meg-a-linearis-szinatmenetek-szintaxisat-es-beallitasait" tabindex="-1"><a class="header-anchor" href="#ismerje-meg-a-linearis-szinatmenetek-szintaxisat-es-beallitasait"><span>Ismerje meg a lineáris színátmenetek szintaxisát és beállításait</span></a></h3>
<p>A lineáris gradiens létrehozásához írd be a <code v-pre>linear‐gradient()</code> függvényt azon tulajdonság értékének, amelyhez a gradienst hozzárendeled. Ezután használd a 10-3. táblázatban megjelenített paramétereket és értékeket a lineáris gradiens részleteinek meghatározásához.</p>
<p>A következő példa a <code v-pre>background‐image</code> tulajdonságnak egy olyan lineáris gradienst rendel, amely balról jobbra fut, kezdve a <code v-pre>red</code>-del és áthaladva a <code v-pre>blue</code>-on keresztül a <code v-pre>violet</code>-ig:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right<span class="token punctuation">,</span> red<span class="token punctuation">,</span> blue<span class="token punctuation">,</span> violet<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th></th>
<th>10-3.táblázat: Lineáris színátmenetek beállításai</th>
</tr>
</thead>
<tbody>
<tr>
<td>Beállítás</td>
<td>Magyarázat</td>
</tr>
<tr>
<td>to</td>
<td>Megadja az irányt. Használj <em>to left</em>, <em>to right</em>, <em>to top</em> vagy <em>to bottom</em>.</td>
</tr>
<tr>
<td>angle</td>
<td>Meghatározza a gradiens szögét fokban - például, <em>45deg</em> vagy <em>270deg</em>.</td>
</tr>
<tr>
<td>color</td>
<td>Határozd meg a használandó színeket. Használhatsz elnevezett színeket, például <em>purple</em>; hexadecimális kódokat; vagy RGB értékeket. Add hozzá a <em>transparent</em> kulcsszót, hogy áttetszőséget tartalmazó gradienst hozz létre.</td>
</tr>
<tr>
<td>color stop</td>
<td>Határozd meg azt a pontot, ahol a gradiens minden színe elkezdődik és befejeződik. Használhatsz tizedes értékeket <em>0</em> és <em>1</em> között, például <em>0,25</em> az elem méretének egynegyedére; vagy százalékokat, például <em>25%</em> ugyanarra a negyedre.</td>
</tr>
</tbody>
</table>
<h3 id="mik-azok-a-radialis-gradiensek" tabindex="-1"><a class="header-anchor" href="#mik-azok-a-radialis-gradiensek"><span>Mik azok a radiális gradiensek?</span></a></h3>
<p>A <em>radial gradient</em> olyan gradiens, amely egy körből vagy ellipszisből indul ki, és színe vagy intenzitása kifelé változik. A következő ábra egy sugárirányú gradienst mutat, amely egy ellipszisből indul ki a <code v-pre>darkred</code> színt használva, áthalad a <code v-pre>red</code>-en és az <code v-pre>orange</code>-on keresztül, és <code v-pre>yellow</code>-val végződik.</p>
<figure><img src="@source/demo/images/10-fejezet/241.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="ismerje-meg-a-radialis-szinatmenetek-szintaxisat-es-beallitasait" tabindex="-1"><a class="header-anchor" href="#ismerje-meg-a-radialis-szinatmenetek-szintaxisat-es-beallitasait"><span>Ismerje meg a radiális színátmenetek szintaxisát és beállításait</span></a></h3>
<p>Radiális színátmenet létrehozásához adja meg a <code v-pre>radial-gradient()</code> függvényt annak a tulajdonságnak az értékeként, amelyhez a gradienst hozzárendeli. Ezután a 10-4. táblázatban ismertetett paramétereket és értékeket használja a színátmenet részleteinek megadásához.</p>
<p>A következő példa a <code v-pre>background-image</code>-hez egy radiális színátmenetet rendel, amely az előző ábrán látható színátmenetet hozza létre.</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">radial-gradient</span><span class="token punctuation">(</span>
	ellipse at 50% 50%<span class="token punctuation">,</span>
	darkred 0%<span class="token punctuation">,</span>
	red 33%<span class="token punctuation">,</span>
	orange 67%<span class="token punctuation">,</span>
	yellow 100%
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th></th>
<th>10-4.táblázat: A sugárirányú színátmenetek beállításai</th>
</tr>
</thead>
<tbody>
<tr>
<td>Beállítás</td>
<td>Magyarázat</td>
</tr>
<tr>
<td>at</td>
<td>Adja meg a színátmenet középpontjának helyzetét. Az alapértelmezett érték az elem közepe. Használhatja az elem magasságának és szélességének páros százalékát – például használhatja a <em>25%</em> <em>75%</em> értékét, hogy megadja az elem szélességének 25 százalékát, balról mérve, és magasságának 75 százalékát felülről mérve. Alternatív megoldásként írja be a pozíciót, például <em>bottom left</em>.</td>
</tr>
<tr>
<td>shape</td>
<td>Határozd meg a gradiens alakját: <em>ellipse</em>, az alapértelmezett; vagy <em>circle</em>.</td>
</tr>
<tr>
<td>size</td>
<td>Határozd meg a gradiens méretét - a leállási helyet. Megadhatod CSS hosszúságértéket, például <em>50%</em>; <em>closest‐side</em> vagy <em>furthest‐side</em>; vagy <em>closest‐corner</em> vagy <em>furthest‐corner</em>.</td>
</tr>
<tr>
<td>color</td>
<td>Határozd meg a használt színeket. Használhatsz elnevezett színeket, például <em>mediumaquamarine</em>; hexadecimális kódokat; vagy RGB értékeket. Add hozzá a <em>transparent</em> kulcsszót, hogy áttetszőséget tartalmazó gradienst hozz létre.</td>
</tr>
<tr>
<td>color stop</td>
<td>Határozd meg azt a pontot, ahol a gradiens minden színe elkezdődik és befejeződik. Használhatsz tizedes értékeket <em>0</em> és <em>1</em> között, például <em>0,75</em> az elem méretének háromnegyedére; vagy százalékokat, például <em>75%</em>.</td>
</tr>
</tbody>
</table>
<h2 id="linearis-gradiens-alkalmazasa-egy-elemre" tabindex="-1"><a class="header-anchor" href="#linearis-gradiens-alkalmazasa-egy-elemre"><span>Lineáris gradiens alkalmazása egy elemre</span></a></h2>
<p>A CSS lineáris színátmenetek lehetővé teszik, hogy feltűnő vagy vonzó mintát adjon a HTML-elemekhez. Használhat például egy lineáris színátmenetet egy elem háttérképeként, és szükség szerint vezérlőket ad hozzá a háttér elé.</p>
<p>Ebben a részben először hozzon létre egy lineáris színátmenetet, amely balról jobbra fut, és csak két színt használ. Ezután megváltoztatja a színátmenet irányát, és további színeket ad hozzá.</p>
<h3 id="linearis-gradiens-alkalmazasa-egy-elemre-1" tabindex="-1"><a class="header-anchor" href="#linearis-gradiens-alkalmazasa-egy-elemre-1"><span>Lineáris gradiens alkalmazása egy elemre</span></a></h3>
<ol>
<li>A Visual Studio Code programban nyissa meg a külső CSS-fájlt, amelyen dolgozni szeretne.</li>
<li>Szintén a Visual Studio Code programban nyisson meg egy HTML-fájlt, amelyhez csatolta a külső CSS-fájlt.</li>
<li>Nyissa meg a HTML-fájlt egy böngészőablakban.</li>
<li>A HTML-fájlba írja be a <code v-pre>div</code> elem kódját, és rendelje hozzá egy osztályhoz, amelynek neve a lineáris színátmenet stílusát adja. Ez a példa a <code v-pre>lingrad</code> nevet használja:</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lingrad<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5">
<li>Kattintson a CSS fájl fülére. A CSS-fájl aktívvá válik.</li>
<li>Kattintson egy üres sorra, és írjon be egy pontot, a 4. lépésben használt osztálystílusnevet, egy szóközt és egy nyitó kapcsos zárójelet, { — például:</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">.lingrad</span> <span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A Visual Studio Code belép a megfelelő záró kapcsos zárójelbe.</p>
<ol start="7">
<li>
<p>Nyomja meg az <strong>Enter</strong> billentyűt egy üres sor létrehozásához, majd írja be a <strong>background‐image: linear‐gradient(right, red, blue);</strong>.</p>
</li>
<li>
<p>Nyomja meg az <strong>Enter</strong> billentyűt egy üres sor létrehozásához, majd írja be a <strong>height: 400px;</strong> értéket.</p>
</li>
<li>
<p>Kattintson a Frissítésre. A weboldal frissül.</p>
<p><code v-pre>A)</code> Megjelenik a lineáris gradiens.</p>
</li>
</ol>
<figure><img src="@source/demo/images/10-fejezet/242.1.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/demo/images/10-fejezet/242.2.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="10">
<li>
<p>Jelölje a <code v-pre>to right</code>-t, és gépelje a <strong>to bottom</strong>-t az irány megváltoztatásához.</p>
</li>
<li>
<p>Kattintson a <code v-pre>red</code> után, és írja be a <strong>green</strong>, szót.</p>
</li>
<li>
<p>Kattintson a Frissítésre. A weboldal frissül.</p>
<p><code v-pre>B)</code> Megjelenik a lineáris gradiens új verziója, felülről lefelé haladva piros, zöld és kék színekkel.</p>
</li>
<li>
<p>Válassza ki a to bottom lehetőséget, és írja be a <strong>225deg</strong>-et.</p>
</li>
<li>
<p>Kattintson a <code v-pre>red</code> után, és írja be, hogy <strong>orange</strong>, <strong>yellow</strong>, .</p>
</li>
<li>
<p>Kattintson a Frissítésre. A weboldal frissül.</p>
<p><code v-pre>C)</code> Megjelenik a lineáris gradiens új verziója, amely átlósan lefelé fut a képernyő jobb felső sarkából piros, narancs, sárga, zöld és kék színekkel.</p>
</li>
</ol>
<figure><img src="@source/demo/images/10-fejezet/243.1.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/demo/images/10-fejezet/243.2.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">TIPP:</p>
<p><strong>Hogyan hozhatok létre ismétlődő lineáris gradienst?</strong></p>
<p>Használja a repeaating-linear-gradient függvényt a lineáris-gradiens függvény helyett. Ez a funkció hasonló módon működik, de megismétli a színátmenetet, nem pedig egyszer jeleníti meg.</p>
</div>
<h2 id="alkalmazzon-sugariranyu-gradienst-egy-elemre" tabindex="-1"><a class="header-anchor" href="#alkalmazzon-sugariranyu-gradienst-egy-elemre"><span>Alkalmazzon sugárirányú gradienst egy elemre</span></a></h2>
<p>A lineáris színátmenetekhez hasonlóan a radiális színátmenetek is lehetővé teszik, hogy szemet gyönyörködtető vagy tetszetős mintákat adjon a HTML-elemekhez. A sugárirányú színátmenetek különösen hasznosak vizuális effektusok, például világítás és árnyékok létrehozásához. A sugárirányú színátmenetet akár az alapértelmezett ellipszis alakjával, akár egy körrel indíthatja, és az alakzatot bárhová elhelyezheti azon az elemen belül, amelyhez a színátmenetet hozzáadja. Kiválaszthatja, hogy mely színek jelenjenek meg a színátmenetben, és megadhatja, hogy hol állítsa le a színátmenetet – például a <code v-pre>closest‐side</code>-nál vagy a <code v-pre>furthest‐side</code>-nál.</p>
<h3 id="alkalmazz-egy-sugariranyu-atmenetet-egy-elemre" tabindex="-1"><a class="header-anchor" href="#alkalmazz-egy-sugariranyu-atmenetet-egy-elemre"><span>Alkalmazz egy sugárirányú átmenetet egy elemre.</span></a></h3>
<ol>
<li>A Visual Studio Code programban nyissa meg azt a külső CSS-fájlt, amelyen dolgozni szeretne.</li>
<li>Szintén a Visual Studio Code programban nyisson meg egy HTML-fájlt, amelyhez csatolta a külső CSS-fájlt.</li>
<li>Nyissa meg a HTML-fájlt egy böngészőablakban.</li>
<li>A HTML-fájlba írja be a <code v-pre>div</code> elem kódját, és rendelje hozzá egy osztályhoz, amelynek neve a lineáris-gradiens stílusát adja.
Ez a példa a <code v-pre>radgrad</code> nevet használja:</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radgrad<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5">
<li>Kattintson a CSS-fájl fülére. A CSS-fájl aktívvá válik.</li>
<li>Kattintson egy üres sorra, és írjon be egy pontot, a 4. lépésben használt osztálystílusnevet, egy szóközt és egy nyitó kapcsos zárójelet, { — például:</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">.radgrad</span> <span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A Visual Studio Code belép a megfelelő záró kapcsos zárójelbe.</p>
<ol start="7">
<li>
<p>Nyomja meg az <strong>Enter</strong> billentyűt egy üres sor létrehozásához, majd írja be a
<strong>background-image: radial-gradient(circle, yellow, blue);</strong> -kifejezést.</p>
</li>
<li>
<p>Nyomja meg az <strong>Enter</strong> billentyűt egy üres sor létrehozásához, majd írja be a <strong>height: 650px;</strong> értéket.</p>
</li>
<li>
<p>Kattintson a Frissítésre. A weboldal frissül.</p>
<p><code v-pre>A)</code> Megjelenik a radiális gradiens.</p>
</li>
</ol>
<figure><img src="@source/demo/images/10-fejezet/244.1.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/demo/images/10-fejezet/244.2.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="10">
<li>Válassza ki a <code v-pre>circle</code>-t és írja be az <strong>ellipse</strong> fölé.</li>
<li>Szerkessze a színsorrendet a következővel további színek hozzáadásával. A példa a a következő kódot használja:</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token function">radial-gradient</span><span class="token punctuation">(</span>ellipse<span class="token punctuation">,</span>
yellow<span class="token punctuation">,</span> cyan<span class="token punctuation">,</span> blue<span class="token punctuation">,</span> purple<span class="token punctuation">,</span>
navy<span class="token punctuation">,</span> black<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="12">
<li>
<p>Nyomj a Frissítésre. A weboldal frissül.</p>
<p><code v-pre>B)</code> A sugárirányú gradiens mutatja a az elvégzett változtatásokat.</p>
</li>
<li>
<p>Kattintson az <code v-pre>ellipse</code> után és írja be a méret utasítást. Ez a példa a <strong>closest-side 33% 66%</strong>-os méretét használja:</p>
</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token function">radial-gradient</span><span class="token punctuation">(</span>ellipse
closest-side at 33% 66%<span class="token punctuation">,</span>
yellow<span class="token punctuation">,</span> cyan<span class="token punctuation">,</span> blue<span class="token punctuation">,</span> purple<span class="token punctuation">,</span>
navy<span class="token punctuation">,</span> black<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="14">
<li>
<p>Nyomj a Frissítésre. A weboldal frissül</p>
<p><code v-pre>C)</code> A sugárirányú gradiens mutatja a az elvégzett változtatásokat.
A példában a gradiens a következőképpen kezdődik a div element egyharmadánál , és kétharmada a lefelé, és akkor áll meg, amikor eléri az elem legközelebbi oldalát.</p>
</li>
</ol>
<figure><img src="@source/demo/images/10-fejezet/245_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/demo/images/10-fejezet/245_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">TIPP:</p>
<p><strong>Hogyan hozhatok létre egy sugárirányú gradienst, amely ismétlődik?</strong></p>
<p>Használja az ismétlődő sugárirányú gradiens funkciót a sugárirányú gradiens funkció helyett. Ez a függvény hasonlóan működik, de megismétli a gradienst ahelyett, hogy egyszer jelenítené meg.</p>
</div>
<h2 id="sprite-ok-hasznalata" tabindex="-1"><a class="header-anchor" href="#sprite-ok-hasznalata"><span>Sprite-ok használata</span></a></h2>
<p>A sprite egy manó vagy tündér, egy testetlen szellem, vagy egy felfelé irányuló villám. De a HTML-ben és a CSS-ben, valamint egyes játékprogramozásban a <code v-pre>sprite</code> az egyetlen kép, amely több kisebb képet tartalmaz, amelyet a weboldalon használnak. Például egy sprite tartalmazhatja az összes egyéni gombképet, amelyet a webhelye használ, vagy a kulcsfontosságú pontok illusztrálására használt ikonok készletét. A látogató böngészője a következőket kéri a sprite fájlt csak egyszer, ahelyett, hogy minden egyes képet külön-külön kérne. Megmondja a böngészőnek, hogy csak a sprite-fájl azon részét mutassa meg, amely a megjeleníteni kívánt képet tartalmazza.</p>
<h3 id="mire-valok-a-sprite-ok-es-mikor-erdemes-hasznalni-oket" tabindex="-1"><a class="header-anchor" href="#mire-valok-a-sprite-ok-es-mikor-erdemes-hasznalni-oket"><span>Mire valók a sprite-ok, és mikor érdemes használni őket?</span></a></h3>
<p>A sprite-oknak két fő célja van:</p>
<ul>
<li><strong>Csökkentse a webszerver terhelését</strong>. A sprite-ok használata csökkenti a webszerverhez intézett kérések számát, így könnyítve annak terhelését, és segítve azt, hogy továbbra is gyorsan tudjon reagálni a kérésekre.</li>
<li><strong>Segít a weboldalak gyors betöltésében</strong>. Mivel a látogató webböngészője csak egy sprite-fájlt, nem pedig egy egész sor egyedi fájlt, a weboldalak gyorsabban töltődnek be.</li>
</ul>
<p>A sprite-ok különösen hasznosak az ikonok esetében, különösen, ha a webhely sok ikont használ. Szintén hasznosak a a navigációs menük lebegő effektusainak létrehozásához, ahol a háttérkép egy másik részének megjelenítésével gyorsabb és simább lehet, mint egy különálló képfájl betöltése.</p>
<p>Az, hogy érdemes-e sprite-okat használni, nagyban függ attól, hogy hány ikon vagy hasonló kis kép van a weboldalon. használ. Általában, ha a webhelye sok kis grafikai elemet, például gombokat vagy ikonokat használ, érdemes lehet sprite-okat használni. De ha a webhelye összesen csak egy maroknyi ikont használ, akkor egy sprite létrehozása valószínűleg nem éri meg az időt vagy a fáradságot.</p>
<p>Amikor eldöntöd, hogy létrehozz-e sprite-okat, számolnod kell azzal az idővel is, ami a sprite fájl vagy fájlok frissítése az egyes ikonok változása után. Ha az ikon mérete is változik, akkor a következő beállításokat kell elvégeznie a sprite-ok megjelenítésére szolgáló kódot is.</p>
<h3 id="az-egyedi-kepek-letrehozasa" tabindex="-1"><a class="header-anchor" href="#az-egyedi-kepek-letrehozasa"><span>Az egyedi képek létrehozása</span></a></h3>
<p>Feltételezve, hogy úgy döntöttél, hogy sprite fájlt hozol létre, az első lépés az egyes képek létrehozása. Minden egyes képnek azonos méretűnek kell lennie, hogy a sprite fájlban sorba vagy rácsba rendezhesse őket.</p>
<h3 id="a-sprite-fajl-osszeallitasa-az-egyes-kepekbol" tabindex="-1"><a class="header-anchor" href="#a-sprite-fajl-osszeallitasa-az-egyes-kepekbol"><span>A Sprite fájl összeállítása az egyes képekből</span></a></h3>
<p>Ezután állítsa össze a sprite fájlt az egyes képek kombinálásával. Ezt a feladatot egy képszerkesztő programmal, például a 4. fejezetben tárgyalt GIMP programmal. Alternatívaként használhat egy sprite-okra összpontosító eszközt is. Számos ilyen eszközt találhat az interneten, némelyik ingyenes, némelyik nem. Ilyen például a TexturePacker, <em>www.codeandweb.com/texturepacker</em>, amely ingyenes verziót kínál.</p>
<p>Tárolja a sprite fájlt vagy a képek számára használt mappában, például egy <em>images</em> mappában, vagy a sprite-specifikus almappában, például az <em>images/sprites</em> mappában.</p>
<h3 id="css-osztaly-letrehozasa-a-sprite-hoz" tabindex="-1"><a class="header-anchor" href="#css-osztaly-letrehozasa-a-sprite-hoz"><span>CSS osztály létrehozása a Sprite-hoz</span></a></h3>
<p>A következő lépésed az, hogy létrehozol egy CSS osztályt a sprite fájl egészéhez, valamint egy CSS osztályt az egyes a sprite fájlból megjelenítendő egyedi képekhez.</p>
<p>A sprite fájl CSS osztálya maga a sprite fájlt állítja be az elem háttérképeként. A esetében Például, mondjuk, hogy van egy <em>sprite1.png</em> nevű sprite fájl az <em>images/sprites</em> mappában. A
CSS-kódot használhat a következőhöz hasonlóan egy <em>sprite1</em> nevű osztály létrehozásához, és hozzárendelheti a <em>sprite1.png</em> állományt fájlhoz, és állítsa be a megjelenítendő terület szélességét és magasságát egy elemre - egy ikon értékű ikonra a sprite fájlt, nem az egész fájlt. Ebben a példában minden ikon 75×75 pixeles.</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">.sprite1</span> <span class="token punctuation">{</span>
	<span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">"images/sprites/sprite1.png"</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 75px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 75px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A sprite fájl minden egyes ikonjához külön osztályt kell létrehozni, amely meghatározza a háttér pozícióját. ahol az adott ikon megjelenítéséhez szükséges sprite-képet kell megjeleníteni. Például, az első ikon tipikusan egy <em>0,0</em> pozíciót kapna a fájl bal felső sarkában:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">.icon1</span> <span class="token punctuation">{</span>
	<span class="token property">background-position</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A fájlban lévő minden más ikonhoz tartozó osztály megadja a megfelelő eltolást a megfelelő rész megjelenítéséhez. a képnek. Például a második 75×75 pixeles ikonhoz a sprite fájlt 75 pixellel kell eltolni balra:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">.icon2</span> <span class="token punctuation">{</span>
	<span class="token property">background-position</span><span class="token punctuation">:</span> -75px 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ha elérte a második sort, a sprite-képet is 75 pixellel feljebb kell tolni.</p>
<h3 id="a-sprite-osztalyok-hasznalata-a-html-dokumentumokban" tabindex="-1"><a class="header-anchor" href="#a-sprite-osztalyok-hasznalata-a-html-dokumentumokban"><span>A Sprite osztályok használata a HTML dokumentumokban</span></a></h3>
<p>A sprite-osztályok létrehozása után a HTML-dokumentumokban más osztályokhoz hasonlóan használhatja őket. A következő példa azt mutatja, hogyan jeleníthet meg két <code v-pre>div</code> elemet, az egyik az icon1 osztályt használja az <code v-pre>icon1</code> osztály megjelenítésére. ikon megjelenítésére, a másik pedig az <code v-pre>icon2</code> osztályt használja a második ikon megjelenítésére:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sprite icon1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sprite icon2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css-animaciok-megertese" tabindex="-1"><a class="header-anchor" href="#css-animaciok-megertese"><span>CSS animációk megértése</span></a></h2>
<p>A CSS különböző animációkat biztosít, amelyek lehetővé teszik, hogy dinamikus és interaktív effekteket építsünk be a a HTML-dokumentumokba. Például alkalmazhat átmeneteket, olyan effekteket, amelyek olyan változásokat tesznek, mint a
például egy elem be- vagy kifakulását. Alternatívaként alkalmazhat transzformációkat, olyan hatásokat, amelyek módosítják az elemet. elem helyzetét vagy megjelenését módosítják, például az elem elforgatásával vagy méretezésével. Az animációt lefuttathatja, amikor egy megfelelő esemény bekövetkezik, például amikor a felhasználó a mutatót az elemre helyezi egy elem fölé.</p>
<p>Ez a szakasz a CSS animációkat ismerteti. A &quot;Kulcskocka animáció létrehozása&quot; című szakasz, később ebben az fejezetben egy lépésről-lépésre bemutatott példán keresztül vezet végig.</p>
<h3 id="a-css-altal-nyujtott-animaciok-kulonbozo-kategoriainak-megertese" tabindex="-1"><a class="header-anchor" href="#a-css-altal-nyujtott-animaciok-kulonbozo-kategoriainak-megertese"><span>A CSS által nyújtott animációk különböző kategóriáinak megértése</span></a></h3>
<p>A CSS számos animációs kategóriát kínál, amelyekkel animálhatod és feldobhatod a weboldalaidat:</p>
<ul>
<li><strong>Transitions.</strong>. Az <code v-pre>transition</code> egy olyan hatás, amely megváltoztatja egy elem stílusát. Például alkalmazhat egy fade-in átmenetet, amely egy elemet fokozatosan jelenít meg az Ön által megadott időtartam alatt, például 10 másodperc.</li>
<li><strong>Transforms</strong>. A <code v-pre>transform</code> olyan hatás, amely megváltoztatja egy elem pozícióját, megjelenését vagy mindkettőt.</li>
<li><strong>Keyframe animations</strong>. A kulcskocka animáció <code v-pre>keyframes</code> használ, az animáció idővonalának olyan pontjait, amelyeket meghatározzák, hogyan nézzen ki az animált elem. Például két kulcskockát használhat, amelyek egy elem átlátszóságát 0-ra állítja az első kulcskockában, hogy az elem teljesen átlátszó legyen, majd az átlátszóságot 0-ra állítja. 100-ra a második kulcskockában, hogy az elem teljesen átlátszatlan legyen. E két kulcskocka esetén a böngésző automatikusan létrehozza a köztük lévő képkockákat az animáció létrehozásához.</li>
<li><strong>Scroll animations</strong>. A <code v-pre>scroll animation</code> automatikusan lejátszódik, amikor a felhasználó felfelé vagy lefelé görget az oldalon. A görgetési animációval szükség szerint csúsztathat elemeket a képernyőre vagy a képernyőről. A görgetés megvalósításához animáció megvalósításához általában a JavaScript <code v-pre>scroll</code> eseményét kell használni, ami azonban meghaladja a e könyv témakörén túlmutat.</li>
<li><strong>SVG animations</strong>. Az SVG animáció egy illusztrációt animál a Scalable Vector Graphics formátumban, amely rövidítve SVG. Például létrehozhat egy olyan animációt, amely megváltoztatja a színeket.</li>
</ul>
<h3 id="atmenetek-letrehozasa" tabindex="-1"><a class="header-anchor" href="#atmenetek-letrehozasa"><span>Átmenetek létrehozása</span></a></h3>
<p>Átmenet létrehozásához a CSS-ben az <code v-pre>transition</code> tulajdonságot az animálni kívánt tulajdonsághoz kell hozzáadni. Ha például színt érintő átmenetet szeretne létrehozni, akkor a <code v-pre>transition</code> tulajdonságot a következőhöz adja hozzá a <code v-pre>color</code> tulajdonsághoz. A következő, &quot;Átmenetek alkalmazása HTML-elemekre&quot; című szakaszban talál egy példát.</p>
<h3 id="transzformaciok-letrehozasa" tabindex="-1"><a class="header-anchor" href="#transzformaciok-letrehozasa"><span>Transzformációk létrehozása</span></a></h3>
<p>A transzformáció létrehozásához a CSS-ben hozzáadjuk a <code v-pre>transform</code> tulajdonságot az animálni kívánt elemhez, és a majd megadja a kívánt transzformáció típusának függvényét. A következő lista négy széles körben ismerteti transzformációt ismerteti:</p>
<ul>
<li><strong>Rotate</strong>. Egy elemet az óramutató járásával megegyező vagy ellentétes irányban forgathat el a <code v-pre>rotate()</code> függvény használatával. Egy elem elforgatásához az óramutató járásával megegyező irányban, pozitív fokszámot kell megadni; az óramutató járásával ellentétes irányban történő elforgatáshoz pedig a negatív számot. A következő példa az elemet 180°-kal az óramutató járásával ellentétesen forgatja el:</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">.element</span> <span class="token punctuation">{</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>-180deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>Translate</strong>. Ez a fordítás inkább egy tárgy mozgatását jelenti, mint a nyelvváltást. Lehetőség van egy elemet a <code v-pre>translate()</code> függvény használatával, és először a vízszintes távolság megadásával, majd a függőleges távolságot. Ha negatív értéket ad meg a vízszintes távolsághoz, akkor az objektumot a balra, vagy pozitív értéket, ha jobbra akarjuk mozgatni. Hasonlóképpen, adjon meg negatív értéket a függőleges távolsághoz az objektum felfelé történő mozgatásához, illetve pozitív értéket a lefelé történő mozgatásához. A következő példa az objektumot 2-vel mozgatja remmel jobbra és 3 remmel lefelé mozgatja a tárgyat:</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">.element</span> <span class="token punctuation">{</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>2rem<span class="token punctuation">,</span> 3rem<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>Scale</strong>. Az elem méretének növeléséhez vagy csökkentéséhez használja a <code v-pre>scale()</code> függvényt, és adjon meg egy megfelelő tényezőt, például <em>0.5</em> az elem méretének felére való méretezéshez, mint a következő példában, vagy <em>2</em> az elem méretének megduplázására.</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">.element</span> <span class="token punctuation">{</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>Skew</strong>. Az elem mindkét tengelyen történő elferdítéséhez vagy megdöntéséhez használja a <code v-pre>skew()</code> függvényt. Csak az x tengelyen történő ferdítéshez, a <code v-pre>skewX()</code> függvényt; ha csak az y-tengelyen szeretnénk elferdíteni, a <code v-pre>skewY()</code> függvényt használjuk. A következő példa az elemet mindkét irányban 45°-kal ferdíti el:</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">.element</span> <span class="token punctuation">{</span>
	<span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">skew</span><span class="token punctuation">(</span>45dg<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="keyframe-animaciok-letrehozasa" tabindex="-1"><a class="header-anchor" href="#keyframe-animaciok-letrehozasa"><span>Keyframe animációk létrehozása</span></a></h3>
<p>A kulcskocka animáció létrehozására vonatkozó példát lásd a &quot;Kulcskocka animáció létrehozása&quot; című részben, a fejezet későbbi részében animáció létrehozására.</p>
<h2 id="atmenetek-alkalmazasa-html-elemekre" tabindex="-1"><a class="header-anchor" href="#atmenetek-alkalmazasa-html-elemekre"><span>Átmenetek alkalmazása HTML-elemekre</span></a></h2>
<p>A webhely tartalmának kell a fő vonzerejének lennie, de a webes szemgolyókért folytatott verseny kemény, és érdemes lehet sztárport szórnia weboldalaira, hogy növelje a webhely vonzerejét.
A weboldalak vizuális vonzerejének fokozásának egyik módja az, ha átmeneteket ad hozzá a HTML-elemekhez.</p>
<p>Átmeneteket alkalmazhat különféle elemekre, például szövegekre, gombokra és képekre. Például megváltoztathatja egy elem megjelenését, amikor a látogató ráviszi a mutatót.</p>
<h3 id="az-atmenetek-beallitasanak-tulajdonsagainak-megismerese" tabindex="-1"><a class="header-anchor" href="#az-atmenetek-beallitasanak-tulajdonsagainak-megismerese"><span>Az átmenetek beállításának tulajdonságainak megismerése</span></a></h3>
<p>A CSS lehetővé teszi az átmenetek beállítását egyetlen rövidített tulajdonság vagy több egyedi tulajdonság használatával.</p>
<p>Az egyetlen gyorsírási tulajdonságot <code v-pre>transition</code>-nek nevezik, és legfeljebb négy paramétert igényel:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token property">transition</span><span class="token punctuation">:</span> property duration timing delay<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Az alábbi lista elmagyarázza, mit jelentenek ezek a paraméterek:</p>
<ul>
<li><strong>property</strong>. Ez a paraméter határozza meg azt a CSS-tulajdonságot, amelyet az átmenetnek érintenie kell, például <code v-pre>background‐color</code>, <code v-pre>height</code> vagy <code v-pre>width</code>.</li>
<li><strong>duration</strong>. Ez a paraméter határozza meg, hogy mennyi ideig tartson az átmenet, ezredmásodperceket, <code v-pre>ms</code>-okat vagy másodperceket, <code v-pre>s</code>-t használva.</li>
<li><strong>timing</strong>. Ez a paraméter határozza meg, hogyan fusson az átmenet. Lehetőségei közé tartozik az <code v-pre>ease‐in</code>, hogy lassan induljon és gyorsuljon; <code v-pre>ease‐out</code> gyorsan indul, majd lassít; és <code v-pre>ease‐in‐out</code>, lassan kezdeni, gyorsan haladni és lassan befejezni.</li>
<li><strong>delay</strong>. Ez a paraméter határozza meg az átmenet futtatása előtti várakozási időt, ezredmásodpercben, <code v-pre>ms</code>-ban vagy másodpercben, <code v-pre>s</code>-ban kifejezve. Ha például <code v-pre>1s</code> késleltetést ad meg egy <code v-pre>hover</code> átmenethez, akkor az átmenet akkor kezdődik, amikor a látogató egy másodpercig az elem felett tartja a mutatót.</li>
</ul>
<p>Az alábbi példa meghatározza a <code v-pre>transition</code> tulajdonságot egy <code v-pre>button</code> elemhez. A gomb fehér szöveget — <code v-pre>color: white;</code> — tartalmaz egy sötét szürke háttéren — <code v-pre>background‐color: darkgray;</code>. A <code v-pre>transition</code> tulajdonság megadja a <code v-pre>background‐color</code>-t mint a változtatandó tulajdonságot, az átmenet időtartamát <code v-pre>1.0s</code>-ként, és az időzítést <code v-pre>ease‐in‐out</code>-ként.</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">button</span> <span class="token punctuation">{</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> darkgray<span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
	<span class="token property">transition</span><span class="token punctuation">:</span> background-color 1s ease-in-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A következő CSS-kód magát az átmenetet mutatja a <code v-pre>:hover</code> pszeudo-osztály használatával. Amikor a látogató a mutatót a gomb fölé állítja, a <code v-pre>background‐color</code> tulajdonság <code v-pre>blue</code> értékre változik, így a gomb sokkal élénkebbnek tűnik.</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">button:hover</span> <span class="token punctuation">{</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Az egyetlen rövidítésű tulajdonság, a <code v-pre>transition</code> használata helyett a következő négy egyedi tulajdonságot használhatja:</p>
<ul>
<li><em>transition‐property</em>. Ez a tulajdonság azt a CSS-tulajdonságot adja meg, amelyre az átmenet vonatkozik.</li>
<li><em>transition-duration</em>. Ez a tulajdonság megadja, hogy mennyi ideig tartson az átmenet, ezredmásodpercek, <code v-pre>ms</code> vagy másodpercek <code v-pre>s</code> használatával.</li>
<li><em>transition-timing-function</em>. Ez a tulajdonság határozza meg az átmenet futtatásának módját – például <code v-pre>ease‐in</code> vagy <code v-pre>ease‐out</code>.</li>
<li><em>transition‐delay</em>. Ez a tulajdonság megadja az átmenet futtatása előtti várakozási időt, ezredmásodpercben, <code v-pre>ms</code>-ban vagy másodpercben, <code v-pre>s</code>-ban kifejezve</li>
</ul>
<p>A következő CSS-kód a korábbi példát valósítja meg újra, és az egyedi tulajdonságokat használja a rövidítés tulajdonság helyett.</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">button</span> <span class="token punctuation">{</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> darkgray<span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
	<span class="token property">transition-property</span><span class="token punctuation">:</span> background-color<span class="token punctuation">;</span>
	<span class="token property">transition-duration</span><span class="token punctuation">:</span> 1s<span class="token punctuation">;</span>
	<span class="token property">transition-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="keyframe-animacio-letrehozasa" tabindex="-1"><a class="header-anchor" href="#keyframe-animacio-letrehozasa"><span>Keyframe animáció létrehozása</span></a></h2>
<p>A CSS lehetővé teszi egy <em>keyframe animation</em> nevű animáció létrehozását, amely meghatározza, hogy egy HTML-elem hogyan változzon egy bizonyos idő alatt. A változtatást úgy irányíthatja, hogy az animáció meghatározott pontjain különféle kulcskockákat azonosít. Ezeknél a kulcsképeknél megadhatja az elem stílusát és pozícióját az animációban.</p>
<p>Létrehozhat például egy kulcsképkocka-animációt, amely manipulálja egy elem <code v-pre>opacity</code> tulajdonságát, így fokozatosan, néhány másodperc alatt megjelenik. A változás mértékének szabályozásához több kulcskockát is meghatározhat ezalatt a két másodperc alatt, mindegyik más értékkel.</p>
<h3 id="keyframe-animacio-letrehozasa-1" tabindex="-1"><a class="header-anchor" href="#keyframe-animacio-letrehozasa-1"><span>Keyframe animáció létrehozása</span></a></h3>
<ol>
<li>A Visual Studio Code-ban nyissa meg azt a külső CSS-fájlt, amelyen dolgozni szeretne.</li>
<li>Szintén a Visual Studio Code-ban nyisson meg egy HTML-fájlt, amelyhez csatolta a külső CSS-fájlt.</li>
<li>Nyissa meg a HTML-fájlt egy böngészőablakban.</li>
<li>A HTML-fájlba írja be az előzetes szöveget, valamint az animálni kívánt elemet. Ebben a példában a kód egy <code v-pre>h1</code> elemet jelenít meg, amelyet egy <code v-pre>img</code> elem követ, amelyet a példa animál.</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Gradually Appearing Image<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>images/frogpad_1024.png<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>90%<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>Kattintson a CSS fájl fülére. Megjelenik a CSS-fájl.</li>
<li>Írjon be egy pontot és az osztály nevét <strong>fade-in</strong>, majd egy szóközt és egy nyitó kapcsos zárójelet, {.
Visual Studio Code beírja a megfelelő záró kapcsos zárójelet, }.</li>
<li>Nyomja meg az <strong>Enter</strong> billentyűt egy üres sor létrehozásához, majd írja be az animáció tulajdonságait:</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token property">animation-name</span><span class="token punctuation">:</span> fade-in<span class="token punctuation">;</span>
<span class="token property">animation-duration</span><span class="token punctuation">:</span> 10s<span class="token punctuation">;</span>
<span class="token property">animation-timing-function</span><span class="token punctuation">:</span> ease-in-out<span class="token punctuation">;</span>
<span class="token property">animation-fill-mode</span><span class="token punctuation">:</span> backwards<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/demo/images/10-fejezet/252.1.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/demo/images/10-fejezet/252.2.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="8">
<li>A fade‐in osztály alá írja be a <strong>@keyframes</strong> kulcsszót, majd egy szóközt; az effektus nevét, <strong>fade‐in;</strong> és egy másik szóközt; és egy nyitó kapcsos, {.
A Visual Studio Code automatikusan beírja a megfelelő kapcsos zárójelet.</li>
<li>Nyomjon <strong>Enter</strong>-t az új sor létrehozásához, majd írja be a from és to részleteket a keyframe-hez:</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">from</span> <span class="token punctuation">{</span>
	<span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">to</span> <span class="token punctuation">{</span>
	<span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="10">
<li>
<p>Kattintson a HTML-fájl fülére. A HTML-fájl aktívvá válik.</p>
</li>
<li>
<p>Kattintson a <code v-pre>&lt;img&gt;</code> tag záró <code v-pre>&gt;</code> elé, és írja be a <strong>class=&quot;fade‐in&quot;</strong> kódrészt.</p>
</li>
<li>
<p>Kattintson a Frissítés gombra. A weboldal frissül.</p>
<p><code v-pre>A)</code> A kép fokozatosan jelenik meg egy 10 másodperces animáció során.</p>
</li>
</ol>
<figure><img src="@source/demo/images/10-fejezet/253.1.olda.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/demo/images/10-fejezet/253.2.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">TIPP:</p>
<p><strong>Mit csinál a <em>@keyframes</em> utasítás?</strong></p>
<p>Az <em>@keyframes</em> utasítás két keyframes-t határoz meg az animáció vezérlésére. Az első keyframe a <code v-pre>from</code> keyframe, ami az <code v-pre>opacity</code> tulajdonságot <code v-pre>0</code>-ra állítja, így az kép kezdetben rejtett lesz. A második keyframe a <code v-pre>to</code> keyframe, ami az <code v-pre>opacity</code> tulajdonságot <code v-pre>1</code>-re állítja, így a kép teljesen látható lesz.</p>
</div>
</div></template>


