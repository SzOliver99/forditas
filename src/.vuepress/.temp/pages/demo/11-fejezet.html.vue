<template><div><h2 id="webes-urlapok-alapjai" tabindex="-1"><a class="header-anchor" href="#webes-urlapok-alapjai"><span>Webes űrlapok alapjai</span></a></h2>
<p>A weboldal űrlap egy olyan weboldal, ami felületként szolgál arra, hogy a látogatók információt adhassanak meg és elküldjék azt. Az űrlap egy weboldalként jelenik meg, amely tartalmazza az adatbeviteli vezérlőket, például szövegmezőket, amelyekbe a felhasználó beírhatja nevét és e-mail címét, valamint jelölőnégyzeteket vagy választógombokat, amelyekkel a felhasználó kiválaszthatja a lehetőségeket. Miután kitöltötte az űrlapot, a felhasználó az Elküldés gomb megnyomásával elküldi azt. Ezután az űrlapból származó adatokat visszakeresi és elküldi egy űrlapkézbesítőnek, ami általában egy szerveroldal, amely tartalmaz egy szkriptet az adatok feldolgozásához. Az űrlap validálhatja az adatokat, amikor a felhasználó beírja azokat, vagy amikor az űrlapot elküldi.</p>
<h3 id="ismerd-meg-az-elemeket-amelyeket-hasznalhatsz-webes-urlapokban" tabindex="-1"><a class="header-anchor" href="#ismerd-meg-az-elemeket-amelyeket-hasznalhatsz-webes-urlapokban"><span>Ismerd meg az elemeket, amelyeket használhatsz webes űrlapokban</span></a></h3>
<p>Az 11‐1. táblázat részletesen bemutatja azokat az adatbeviteli elemeket, amelyeket az HTML biztosít a webes űrlapokhoz. A közelben található ábra többek között a leggyakrabban használt adatbeviteli elemeket mutatja be.</p>
<figure><img src="@source/demo/images/11-fejezet/256-elso.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<table>
<thead>
<tr>
<th></th>
<th>Táblázat 11-1: Adatbeviteli elemek a webes űrlapokhoz</th>
</tr>
</thead>
<tbody>
<tr>
<td>text(A)</td>
<td>Egy soros szövegbeviteli mező. Ez az alapértelmezett érték az input esetén, tehát ha kihagyod a típus attribútumot, egy egy soros szövegbeviteli mezőt kapsz.</td>
</tr>
<tr>
<td>button(B)</td>
<td>Egy parancs gomb. Szabályozhatod a gombon megjelenő szöveget, valamint azt, hogy mi történjen, amikor a felhasználó rákattint a gombra. Például létrehozhatsz egy &quot;További információk kérése&quot; nevű gombot, amely egy párbeszédpanelt jelenít meg, extra információkat mutatva.</td>
</tr>
<tr>
<td>checkbox(C)</td>
<td>Egy jelölőnégyzet. A felhasználó kiválaszthatja a jelölőnégyzetet az opció engedélyezéséhez vagy egy pozitív válasz jelzéséhez, vagy kijelölheti a jelölőnégyzetet az opció letiltásához vagy egy negatív válasz jelzéséhez.</td>
</tr>
<tr>
<td>color(D)</td>
<td>Színválasztó. A felhasználó kattinthat a színválasztóra annak érdekében, hogy vezérlőket jelenítsen meg a szín kiválasztásához.</td>
</tr>
<tr>
<td>date(E)</td>
<td>Dátummező. A legtöbb böngésző most egy dátumválasztót jelenít meg, egy mini-naptár vezérlőt, amely lehetővé teszi a felhasználó számára, hogy vizuálisan válassza ki a dátumot, ahelyett, hogy be kellene azt gépelnie.</td>
</tr>
<tr>
<td>datetime-local</td>
<td>Dátum és idő mező. Erre is a legtöbb böngésző egy dátumválasztót jelenít meg egy idővezérlővel, amely lehetővé teszi a felhasználó számára, hogy a dátumot és az időt kiválassza kattintással, anélkül hogy be kellene azt gépelnie.</td>
</tr>
<tr>
<td>email(F)</td>
<td>Egy olyan beviteli mező, amely egy e-mail címet fogad be. A legtöbb böngésző automatikusan validálja a címet annak elküldésekor. Az iOS és Android operációs rendszerekben az érintőképernyős billentyűzet megjeleníti a &quot;.com&quot; tartományválasztó gombot, amikor egy e-mail mező van kiválasztva.</td>
</tr>
<tr>
<td>file(G)</td>
<td>Fájlkiválasztó gomb, például egy &quot;Fájl kiválasztása&quot; gomb. A felhasználó kattinthat a gombra annak érdekében, hogy megjelenítse az &quot;Megnyitás&quot; vagy hasonló párbeszédpanelt, amely lehetővé teszi egy feltöltendő fájl kiválasztását.</td>
</tr>
<tr>
<td>hidden</td>
<td>Egy rejtett beviteli mező. Egy rejtett mezőt használhatsz adatok beillesztésére az űrlap elküldésekor. Vigyázat, bár a mező rejtett a böngészőben, látható az oldal forrásában, így bárki könnyen megtekintheti.</td>
</tr>
<tr>
<td>image</td>
<td>Egy kép, amely funkcióként működik egy Elküldés gombként. Egy képbeviteli mezőt használhatsz egy Elküldés gomb helyett vagy mellette, amiről később lesz szó ebben a táblázatban.</td>
</tr>
<tr>
<td>month</td>
<td>Hónap és év mező. A legtöbb böngésző most egy dátumválasztót jelenít meg, amely lehetővé teszi a felhasználó számára, hogy a hónapot és az évet vizuálisan válassza ki.</td>
</tr>
<tr>
<td>number</td>
<td>Numerikus beviteli mező, beleértve a forgógombokat az érték beállításához. Beállíthatod az értékek minimális és maximális korlátjait, amelyeket a mező elfogad — például minimális érték lehet 1, a maximális pedig 10.</td>
</tr>
<tr>
<td>password</td>
<td>Jelszó mező. Ez egy egy soros szövegmező, amelyben a begépelt karakterek csillagokkal vagy körökkel jelennek meg, a vállalatkövetés elleni biztonság érdekében.</td>
</tr>
<tr>
<td>radio(H)</td>
<td>Egy rádiógomb, más néven választógomb. A rádiógombok csoportokban jelennek meg kettő vagy annál több és lehetővé teszik a felhasználó számára, hogy válasszon egyet a csoportban lévő lehetőségek közül. Ha egy rádiógombra kattintunk, az kiválasztja azt a gombot, és a korábban kiválasztott másik rádiógomb kiválasztását megszünteti.</td>
</tr>
<tr>
<td>range(I)</td>
<td>Egy csúszka, amely lehetővé teszi a felhasználó számára, hogy egy meghatározott tartományban kiválassza az értéket. Például, hangerőszabályzó.</td>
</tr>
<tr>
<td>reset(J)</td>
<td>Egy Visszaállítás gomb. A felhasználó rákattinthat erre a gombra annak érdekében, hogy az összes űrlapbevitelt visszaállítsa az alapértelmezett értékeikre.</td>
</tr>
<tr>
<td>search</td>
<td>Egy keresőmező. A felhasználó beírhat egy keresési kifejezést, amelyet a vezérlésben meghatározott keresőmotoron keres meg.</td>
</tr>
<tr>
<td>submit(K)</td>
<td>Egy Elküldés gomb. Ez a gomb, amelyre a felhasználó kattintva elküldi az űrlap adatait egy űrlapkézbesítőnek. Az alapértelmezett címke az Elküldés, de ha szeretnéd, más címkét is adhatsz a gombnak.</td>
</tr>
<tr>
<td>tel(L)</td>
<td>Egy szövegmező, amelyet telefonn szám fogadására terveztek. A minta attribútumot használhatod az elfogadható számformátum meghatározására.</td>
</tr>
<tr>
<td>time(M)</td>
<td>Időmező. A legtöbb böngésző most egy időválasztót jelenít meg, amely lehetővé teszi a felhasználó számára, hogy vizuálisan válassza ki az időt.</td>
</tr>
<tr>
<td>URL(N)</td>
<td>Egy szövegmező egy URL számára. A legtöbb böngésző automatikusan validálja az URL-t, amikor az űrlapot elküldik.</td>
</tr>
<tr>
<td>week</td>
<td>Hétmező. A legtöbb böngésző most egy hétválasztót jelenít meg, amely lehetővé teszi a felhasználó számára, hogy vizuálisan válassza ki a hetet és az évet.</td>
</tr>
</tbody>
</table>
<h2 id="formanyomtatvany-letrehozasa" tabindex="-1"><a class="header-anchor" href="#formanyomtatvany-letrehozasa"><span>Formanyomtatvány létrehozása</span></a></h2>
<p>Amikor szeretnéd, hogy weboldalad látogatói információt küldjenek neked, készíts egy webes űrlapot. Például szeretnéd, hogy a látogatók kitöltsenek egy felmérést, feliratkozzanak egy hírlevélre, vagy beküldjenek egy állásra jelentkezést.</p>
<p>Ahhoz, hogy elkezdj egy űrlap létrehozását, elhelyezel egy <strong>form</strong> elemet a megfelelő helyre egy weboldalon, és megadod vagy a GET vagy a POST módszert, ha már tudod, hogy melyiket fogja használni az űrlap. Az elem nyitó <code v-pre>&lt;form&gt;</code> tag-je és záró <code v-pre>&lt;/form&gt;</code> tag-je között beírod az űrlap bemeneti vezérlőit.</p>
<h3 id="formanyomtatvany-letrehozasa-1" tabindex="-1"><a class="header-anchor" href="#formanyomtatvany-letrehozasa-1"><span>Formanyomtatvány létrehozása:</span></a></h3>
<ol>
<li>Nyissa meg a Visual Studio Code-ban a fájlt a
amelyben az űrlapot elhelyezzük.</li>
<li>Nyissa meg a fájlt egy böngészőablakban.</li>
<li>A Visual Studio Code-ban kattintson a
beillesztési pontra, ahol el akarja kezdeni
az űrlapot.</li>
<li>Írja be az <strong>f</strong> billentyűt a bővítmények listájának megjelenítéséhez. <br>
<code v-pre>A)</code> Ha az űrlapod a get műveletet használja, kattintson a <strong>form:get</strong> gombra. Lásd a tippet. <br>
<code v-pre>B)</code> Ha az űrlap a post műveletet használja,
kattintson a <strong>form:post</strong> gombra.</li>
<li>Kattintson a <strong>form</strong>-ra. <br>
<code v-pre>C)</code> A Visual Studio Code beszúrja a nyitó
<code v-pre>&lt;form&gt;</code> címkét, az <strong>action</strong> attribútumot
a beszúrási ponton belül dupla
idézőjelek közé, és a záró
<code v-pre>&lt;/form&gt;</code> címkét:</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/demo/images/11-fejezet/258_elso.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="6">
<li>Nyomja meg a <code v-pre>tab</code> gombot a beszúrási pont áthelyezéséhez a
közvetlenül a <code v-pre>&lt;/form&gt;</code> címke elé, majd
nyomja meg az <code v-pre>enter</code> gombot többször az üres
sorok létrehozásához (nem látható).</li>
<li>Kattintson a gombra a beszúrási pont elhelyezéséhez a
az első üres sorba.</li>
<li>Írja be a <strong>la</strong> billentyűt szót a bővítmények listájának megjelenítéséhez.</li>
<li>Kattintson a <strong>lable</strong>-re. <br>
<code v-pre>D.</code> A Visual Studio Code beszúrja a nyitó <code v-pre>&lt;label&gt;</code> tag-et, a for attribútumot a beszúrási ponttal együtt dupla idézőjel között, és a záró <code v-pre>&lt;/label&gt;</code> tag-et:</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="10">
<li>Írd be azt a nevet, amit hozzá fogsz rendelni az input vezérlőhöz, amit hozzáadsz. Az példában a név first_name.</li>
<li>Nyomj azért, hogy a beszúrási pontot éppen a <code v-pre>&lt;/label&gt;</code> címke elé mozgásra kényszerítsd, majd írd be a címke megjelenítési szövegét. A példában ez az: Keresztnév:</li>
<li>Kattints a <strong>Refresh</strong> gombra. <br>
A weboldal frissül. <br>
<code v-pre>E)</code> A címke megjelenik.</li>
<li>A következő sorban írd be azt hogy <strong>in</strong>, majd kattints az <strong>input:text</strong> elemre a kibontási listában.
A Visual Studio Code beszúrja az <code v-pre>&lt;input&gt;</code> címkét, amely így néz ki:</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="14">
<li>Az attribútum név részének rendeld hozzá a 10. lépésben megadott nevet — a példában <strong>first_name</strong>.</li>
<li>Az id attribútumhoz adj meg egy leíró ID-t. A példa újra first_name-t használ.</li>
<li>Kattints a <strong>Refresh</strong> gombra. <br>
A weboldal frissül. <br>
<code v-pre>F)</code> A szöveges beviteli vezérlő megjelenik.</li>
</ol>
<p><img src="@source/demo/images/11-fejezet/258_masodik.png" alt="" loading="lazy">
<img src="@source/demo/images/11-fejezet/258_harmadik.png" alt="" loading="lazy"></p>
<p>::: tipp TIPP:
<strong>A get vagy a post módszert válasszam az űrlapomhoz?</strong>
Az, hogy a get vagy a post módszert használja, attól függ, hogy a webhelye milyen szkriptet fog használni az űrlapok gyűjtésére.
információt fog gyűjteni az űrlapról. Kérdezze meg rendszergazdáját, hogy melyik módszert használja. Ha nem tudja meghatározni
melyik módszert használja, hagyja meg nem határozva a módszert az űrlap létrehozásakor. Hozzáadhatja a módszert
amikor az űrlap egyébként elkészült. <br>
A biztonság érdekében az űrlapot tartalmazó oldalt csak HTTPS-en keresztül tegye elérhetővé, HTTP-n keresztül ne. Konzultáljon a rendszerével
rendszergazdával az űrlapon keresztül beküldött adatok titkosításáról.
:::</p>
<h2 id="szovegbeviteli-vezerlok-hozzaadasa-egy-urlaphoz" tabindex="-1"><a class="header-anchor" href="#szovegbeviteli-vezerlok-hozzaadasa-egy-urlaphoz"><span>Szövegbeviteli vezérlők hozzáadása egy űrlaphoz</span></a></h2>
<p>A HTML számos beviteli vezérlőelemet tartalmaz, amelyekkel egy űrlap felhasználójától szöveget kaphat. A legtöbb
ezek közül a legegyszerűbb a szövegbevitel, amellyel szinte bármilyen szöveget lekérdezhetünk.
Ha azonban egy bizonyos formátumú szövegre van szükségünk, használhatunk egy olyan beviteli vezérlőt, amelyet arra terveztek, hogy fogadjon
formátum fogadására. Az e-mail beviteli típus az űrlap elküldésekor érvényesíthet egy e-mail címet, és
az url beviteli típus egy URL-címet tud érvényesíteni. A tel bemeneti típus egy szám fogadására szolgál egy
elfogadható telefonszám-formátumot kapjon, amelyet Ön határoz meg.</p>
<p><strong>Szövegbeviteli vezérlők hozzáadása az űrlaphoz</strong></p>
<ol>
<li>A Visual Studio Code-ban nyisd meg a fájlt, amely tartalmazza az űrlapot.</li>
<li>Nyisd meg a fájlt egy böngészőablakban.</li>
<li>A Visual Studio Code-ban kattints arra a helyre, ahol be akarod szúrni a következő bemeneti vezérlőt.
A. Ha szükséges, írd be <code v-pre>&lt;br&gt;</code>-t egy sortörés kényszerítéséhez.</li>
<li>Írd be azt hogy <strong>la</strong>.
Megjelenik a kibontási lista.</li>
<li>Kattints a <strong>lable</strong> tag-re.
B. A <code v-pre>&lt;label&gt;</code> elem megjelenik.</li>
<li>Írd be azt a nevet, amelyet hozzárendelsz a hozzáadni kívánt bemeneti vezérlőhöz. Az példában a <strong>last_name</strong>-et használjuk.</li>
<li>Nyomd meg az <code v-pre>Tab</code>-ot az elhelyezési pont áthelyezéséhez, ahol a <code v-pre>&lt;/label&gt;</code> tag előtt szeretnéd elhelyezni, majd írd be a címke szövegét.
Az példában a <strong>Last Name:</strong> szöveget használjuk.</li>
<li>A következő sorban írd be az <strong>in</strong> szót, majd kattints az <strong>input:text</strong> elemre a kibontási listában.
Megjelenik az <code v-pre>&lt;input&gt;</code> tag.</li>
<li>A name attribútumnak rendeld hozzá a 6. lépésben megadott nevet – a példában <strong>last_name</strong>.</li>
<li>A id attribútumnak rendeld hozzá a leíró azonosítót.
A példában újra a <strong>last_name</strong>-et használjuk.</li>
<li>Kattints a <strong>Refresh</strong> gombra. <br>
A weboldal frissül. <br>
<code v-pre>C)</code> A Vezetéknév szövegbeviteli mező és annak címkéje megjelenik.</li>
<li>Írj be egy másik <code v-pre>&lt;br&gt;</code> tag-et egy sortörés kikényszerítéséhez.</li>
<li>Ismételd meg a 4. és a 10. lépést, hogy beszúrj egy másik címkét és beviteli mezőt. Ezúttal helyezz be egy e-mail mezőt. A példa ezt a kódot használja:</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Email Cím:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="14">
<li>Írj be egy másik <code v-pre>&lt;br&gt;</code> tag-et egy sortörés kikényszerítéséhez.</li>
<li>Ismételd meg a 4. és a 10. lépést, hogy beszúrj egy másik címkét és beviteli mezőt. Ezúttal helyezz be egy telefonszám mezőt. A példa ezt a kódot használja:</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>telephone<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Telefonszám:<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
	<span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tel<span class="token punctuation">"</span></span>
	<span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>telephone<span class="token punctuation">"</span></span>
	<span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>telephone<span class="token punctuation">"</span></span>
	<span class="token attr-name">pattern</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[0-9]{3}-[0-9]{3}-[0-9]{4}<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Megjegyzés:</strong> Különböző helyzetekben eltérő mintaattribútumot használhatsz a telefonszámhoz.</p>
<ol start="16">
<li>Kattints a <strong>Refresh</strong> gombra. <br>
A weboldal frissül. <br>
<code v-pre>D)</code> Az e-mail mező és a telefonszám mező megjelenik.</li>
</ol>
<p>::: tipp TIPP:
<strong>Így használhatod a minta attribútumot egy telefonszám bevitelhez?</strong>
Ha ellenőrizni szeretnéd a felhasználó által megadott telefonszámot, akkor a minta attribútumot kell felvenned az <code v-pre>&lt;input&gt;</code> tag-be, és egy reguláris kifejezést kell használnod a minta meghatározásához. Egy reguláris kifejezés egy karakterek sorozata, amely egy keresési mintát határoz meg. Egy amerikai telefonszám esetén általában a következő mintát használnád: <strong>pattern = &quot;[0‐9]{3}‐[0‐9]{3}‐[0‐9]{4}&quot;</strong>, ami három számjegyet jelent a 0–9 tartományban, egy kötőjelet, további három számjegyet a 0–9 tartományban, egy másik kötőjelet, és végül négy számjegyet a 0–9 tartományban — például 415‐555‐1212. Nem minden böngésző ellenőrzi a telefonszám bevitelt, így érdemes a szerveren ellenőrizni a telefonszámot a űrlapadatok összegyűjtése után.
:::</p>
<h2 id="radiogombok-hozzaadasa-egy-urlaphoz" tabindex="-1"><a class="header-anchor" href="#radiogombok-hozzaadasa-egy-urlaphoz"><span>Rádiógombok hozzáadása egy űrlaphoz</span></a></h2>
<p>A HTML lehetővé teszi rádiógombok hozzáadását egy űrlaphoz, egyszerű módot adva arra, hogy a felhasználó válasszon egy lehetőséget egy csoportból. A rádiógombok, más néven opciógombok, két vagy több csoportban jelennek meg, és lehetővé teszik a felhasználó számára, hogy kiválasszon egy lehetőséget a csoportból. Az egyik rádiógombra kattintva kiválasztja azt a gombot, és visszavonja a korábban kiválasztott másik rádiógomb kiválasztását, ha volt ilyen. A csoportban alapértelmezés szerint egy opciós gombot lehet kiválasztani a <code v-pre>checked</code> attribútum beállításával.</p>
<h3 id="radiogombok-hozzaadasa-egy-urlaphoz-1" tabindex="-1"><a class="header-anchor" href="#radiogombok-hozzaadasa-egy-urlaphoz-1"><span>Rádiógombok hozzáadása egy űrlaphoz</span></a></h3>
<ol>
<li>Nyisd meg a fájlt a Visual Studio Code-ban, amely tartalmazza az űrlapot.</li>
<li>Nyisd meg a fájlt egy böngészőablakban.</li>
<li>A Visual Studio Code-ban kattints arra a helyre, ahol el szeretnéd helyezni a következő bemeneti vezérlőt. <br>
<code v-pre>A)</code> Ha szükséges, írj <code v-pre>&lt;br&gt;</code>-t, hogy sortörést hozz létre.</li>
<li>Írd be a következőt: <strong>in</strong>.
A kiegészítő lista megjelenik.</li>
<li>Kattints az <strong>input:radio</strong>-ra.
A Visual Studio Code beilleszti az <code v-pre>&lt;input&gt;</code> tag-et:<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<figure><img src="@source/demo/images/11-fejezet/262-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="6">
<li>Az idézőjelek között a name attribútum után gépeld be a rádiógombok csoportjának nevét — például:</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>platform<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="7">
<li>Az idézőjelek között az <code v-pre>id</code> attribútum után gépeld be a rádiógomb nevét — például:</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>platform<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>linux<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="8">
<li>A következő sorba írj egy <strong>l</strong> betűt, majd kattints a kiegészítő listán belül, a <strong>label</strong>-re.
A Visual Studio Code beszúr egy <code v-pre>&lt;label&gt;</code> tag-et, beleértve a <code v-pre>for</code> attribútumot, és a beszúrási pontot az attribútum utáni idézőjelek közé helyezi.</li>
</ol>
<figure><img src="@source/demo/images/11-fejezet/262-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="9">
<li>Írd be az <code v-pre>id</code>, amit a 7. lépésben rendeltél hozzá.</li>
<li>Nyomj <code v-pre>TAB</code>-ot a beszúrási pont előtti <code v-pre>&lt;/label&gt;</code> tag elé, majd írd be a címke megjelenítendő szövegét. Ebben a példában <strong>Linux</strong>ot használunk.</li>
<li>Kattints a <strong>Refresh</strong>-re. <br>
A weboldal frissül. <br>
<code v-pre>B)</code> A rádiógomb megjelenik.</li>
</ol>
<figure><img src="@source/demo/images/11-fejezet/263-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="12">
<li>Ismételd meg a 4. és 10. lépést, hogy más rádiógombokat adj hozzá a csoportba. A példa az alábbi kódot használja:</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>platform<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>macos<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>macos<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>macOS <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>radio<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>platform<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>windows<span class="token punctuation">"</span></span> <span class="token attr-name">checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checked<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>windows<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Windows <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>C)</code> Ha szeretnél választani egy rádiógombot, add hozzá a <code v-pre>checked</code> tulajdonságot az <code v-pre>&lt;input&gt;</code> tag-hez, és rendelj hozzá egy értéket. Bármit hozzárendelhetsz, például <code v-pre>checked=&quot;penguin&quot;</code>, de általában a <code v-pre>checked=&quot;checked&quot;</code> a legértelmesebb. 13. Kattints a <strong>Refresh</strong>-re. <br>
A weboldal frissül. <br>
<code v-pre>D)</code> Megjelennek a rádiógombok. <br>
<code v-pre>E)</code> A megadott <code v-pre>checked</code> tulajdonsággal rendelkező rádiógomb van kiválasztva. \</p>
<figure><img src="@source/demo/images/11-fejezet/263-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>:::tipp TIPP:
<strong>Tehetek több rádiógomb csoportot egy űrlapra?</strong> <br>
Igen — annyit, amennyire szükséged van. Használd az ’input’ elem ’name’ attribútumát minden opciógomb esetében annak megadására, hogy melyik csoport tagja. Az űrlap felületén tisztázd az egyes csoportok különböző célját és rendezd el úgy, hogy a felhasználó azonnal megkülönböztesse az egyik csoportot a másiktól. <br>
<strong>Mi történik, ha több rádiógombra is beállítom a checked tulajdonságot?</strong> <br>
Az HTML a te kódodban utoljára megadott rádiógombot választja ki, amelyre a checked tulajdonságot beállítottad.
:::</p>
<h2 id="jelolonegyzetek-hozzaadasa-egy-urlaphoz" tabindex="-1"><a class="header-anchor" href="#jelolonegyzetek-hozzaadasa-egy-urlaphoz"><span>Jelölőnégyzetek hozzáadása egy űrlaphoz</span></a></h2>
<p>Amikor független igen/nem vagy be/ki vezérlést kell hozzáadnod egy űrlaphoz, beszúrhatsz egy jelölőnégyzetet úgy, hogy hozzáadsz egy ’input’ vezérlőt, és megadod a ’checkbox’ értéket a ’type’ attribútumnak. A felhasználó a jelölőnégyzet kiválasztásához kattint, ha az jelenleg nincs kijelölve, vagy a kijelölés megszüntetéséhez, ha ki van jelölve. A jelölőnégyzetet alapértelmezés szerint jelölheted ki, ha a jelölőnégyzet ’checked’ attribútumát ’checked’ vagy más értékre állítja.</p>
<h3 id="jelolonegyzetek-hozzaadasa-egy-urlaphoz-1" tabindex="-1"><a class="header-anchor" href="#jelolonegyzetek-hozzaadasa-egy-urlaphoz-1"><span>Jelölőnégyzetek hozzáadása egy űrlaphoz</span></a></h3>
<ol>
<li>A Visual Studio Code-ban nyisd meg azt a fájlt, amely tartalmazza az űrlapot.</li>
<li>Nyisd meg a fájlt egy böngészőablakban.</li>
<li>A Visual Studio Code-ban kattints arra a helyre, ahol el szeretnéd helyezni az első jelölőnégyzetet.
<code v-pre>A)</code> Ha szükséges, írj <code v-pre>&lt;br&gt;</code>-t azért, hogy sortörést hozz létre.</li>
<li>Írd be a következőt: <strong>in</strong>.
A kiegészítő lista megjelenik.</li>
<li>Kattints az <strong>input:checkbox</strong>-ra.
A Visual Studio Code beszúrja a <code v-pre>&lt;input&gt;</code> tag-et:</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/demo/images/11-fejezet/264-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="6">
<li>Az idézőjelek között a ’name’ attribútum után gépeld be a jelölőnégyzet nevét, amit hozzárendelni kíván - például:</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mech<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="7">
<li>Az idézőjelek között az <code v-pre>id</code> attribútum után gépeld be a rádiógomb nevét - például:</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mech<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mech<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="8">
<li>A következő sorba írj egy <strong>l</strong> betűt, majd kattints a kiegészítő listán belül, a <strong>label</strong>-re.
A Visual Studio Code beszúr egy <code v-pre>&lt;label&gt;</code> tag-et, beleértve a <code v-pre>for</code> attribútumot, és a beszúrási pontot az attribútum utáni dupla idézőjelek közé helyezi.</li>
</ol>
<figure><img src="@source/demo/images/11-fejezet/264-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="9">
<li>Írja be a 7. lépésben hozzárendelt azonosítót.</li>
<li>Nyomja meg a <code v-pre>TAB</code> billentyűt, hogy a beszúrási pontot közvetlenül a <code v-pre>&lt;/label&gt;</code> címke elé helyezze, majd írja be a címke megjelenített szövegét. Ez a példa a <strong>Mechanical Keyboards hírlevelének elküldését használja.</strong></li>
<li>Kattintson a <strong>Refresh</strong> gombra. <br>
<code v-pre>A)</code> weboldal frissül. <br>
<code v-pre>B)</code> Megjelenik a
jelölőnégyzet és a hozzá tartozó címke. <br>
<code v-pre>C)</code> Ha szükséges, törés</li>
</ol>
<figure><img src="@source/demo/images/11-fejezet/2024-03-05 10 58 42.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>beszúrásához írja be a <code v-pre>&lt;br&gt;</code> parancsot. 12. Ismételje meg a 4–10. lépéseket, hogy szükség szerint további jelölőnégyzeteket szúrjon be, mindegyik címkével. <br>
<code v-pre>D)</code> Ha ki szeretne jelölni egy jelölőnégyzetet, adja meg a bejelölt attribútumot a
<code v-pre>&lt;input&gt;</code> címkét, és rendeljen hozzá értéket.
<strong>Megjegyzés:</strong> Bármilyen értéket hozzárendelhet, például <code v-pre>checked=&quot;yep&quot;</code>, de a <code v-pre>checked= &quot;checked&quot;</code> általában a legegyértelműbb. 13. Kattintson a <code v-pre>Refresh</code> gombra.<br>
A weboldal frissül.<br>
<code v-pre>E)</code> Megjelennek a jelölőnégyzetek.</p>
<figure><img src="@source/demo/images/11-fejezet/2024-03-05 10 59 25.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>:::tipp TIPP:
Hogyan rendelhetek visszatérési (return) értéket egy jelölőnégyzethez?
Ha egy jelölőnégyzethez (check box) visszatérési értéket szeretne rendelni, adja meg az érték attribútumot a jelölőnégyzet bemeneti címkéjében, és adja meg az értéket. Ha például azt szeretné, hogy a jelölőnégyzet az Newsletter 1-nél a szöveget adja vissza, használhatja az</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>checkbox<span class="token punctuation">"</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nl<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nl<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Newsletter 1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="legordulo-lista-lehetosegek-hozzaadasa-egy-urlaphoz" tabindex="-1"><a class="header-anchor" href="#legordulo-lista-lehetosegek-hozzaadasa-egy-urlaphoz"><span>Legördülő lista lehetőségek hozzáadása egy űrlaphoz</span></a></h2>
<p>Ha az űrlapon a felhasználónak ki kell választania egy opciót a sok lehetséges opció közül, hozzáadhat egy legördülő listát. Ehhez be kell szúrnia egy kijelölő (select) elemet, és annyi beállítási (option) elemmel kell feltöltenie, amennyi szükséges. Minden beállításelem a következőképpen jelenik meg: egy külön elem a legördülő listában. A felhasználó a legördülő menü gombra kattintva megjelenik a legördülő listát, amelyen egy elemre kattintva kiválaszthatja azt.</p>
<h3 id="legordulo-lista-lehetosegek-hozzaadasa-egy-urlaphoz-1" tabindex="-1"><a class="header-anchor" href="#legordulo-lista-lehetosegek-hozzaadasa-egy-urlaphoz-1"><span>Legördülő lista lehetőségek hozzáadása egy űrlaphoz</span></a></h3>
<ol>
<li>A Visual Studio Code programban nyissa meg az űrlapot tartalmazó fájlt.</li>
<li>Nyissa meg a fájlt egy böngészőablakban.</li>
<li>A Visual Studio Code programban kattintson a beszúrási pont helyére a legördülő lista helyére.
<code v-pre>A)</code> Ha szükséges, írja be a <code v-pre>&lt;br&gt;</code> parancsot a sortörés kényszerítéséhez.</li>
<li>Típus <strong>l</strong>.
Megjelenik a bővítmények listája.</li>
<li>Kattintson a <strong>lable</strong>-re.
B A Visual Studio Code beilleszti a nyitó <code v-pre>&lt;label&gt;</code> címkét.</li>
<li>Írja be a <code v-pre>select</code> elemhez a hozzáadni kívánt nevet. A példában a név <strong>keyboard_type</strong>.</li>
<li>Nyomja meg a <code v-pre>TAB</code> billentyűt, hogy a beszúrási pontot közvetlenül a <code v-pre>&lt;/label&gt;</code> címke elé helyezze, majd írja be a címke megjelenített szövegét. A példában ez van
<strong>Keyboard Type</strong> (Billentyűzet típusa):.</li>
<li>Kattintson a <strong>Refresh</strong> gombra. <br>
A weboldal frissül. <br>
<code v-pre>C)</code> Megjelenik a <strong>lable</strong>.</li>
<li>A következő sorba írja be az <strong>s</strong>. karaktert.
Megjelenik a bővítmények listája.</li>
<li>Kattintson a kiválasztás <strong>select</strong> gombra.</li>
</ol>
<h2 id="a-visual-studio-code-beszurja-a-select-elemet" tabindex="-1"><a class="header-anchor" href="#a-visual-studio-code-beszurja-a-select-elemet"><span>A Visual Studio Code beszúrja a select elemet:</span></a></h2>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="11">
<li>Az insertálási pontra a name dupla idézőjelei közé írd be a select elem nevét. A példa a <code v-pre>keyboard_type</code>-ot használja.</li>
<li>Nyomj <code v-pre>Tab</code>-ot, hogy az insertálási pontot áthelyezd az id dupla idézőjelei közé, és írd be a 6. lépésben megadott értéket.</li>
<li>Nyomj <code v-pre>Tab</code>-ot, hogy az insertálási pontot közvetlenül a <code v-pre>&lt;/select&gt;</code> elé helyezd, majd nyomj többször <code v-pre>Enter</code>-t, hogy üres sorokat hozz létre (nem látható).</li>
<li>Az első üres sorba írd be az <code v-pre>op</code>-t, majd kattints az <code v-pre>option</code>-ra a kiterjesztések listáján. A Visual Studio Code beszúrja az option elemet:</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="15">
<li>Az insertálási pontot az érték dupla idézőjelei közé helyezd a <code v-pre>value</code> után, és írd be az opcióhoz rendelt visszatérési értéket. Ebben a példában a <code v-pre>laptop</code>-ot használjuk.</li>
<li>Nyomj <code v-pre>Tab</code>-ot, majd írd be az elem megjelenítési szövegét. Ebben a példában a <code v-pre>Laptop Keyboard</code>-ot használjuk.</li>
<li>Ismételd meg a 14. és 16. lépéseket, hogy további <code v-pre>option</code> elemeket adj hozzá a <code v-pre>select</code> elemhez.</li>
</ol>
<p>:::tipp TIPP:
Mi a name attribútum szerepe a select elemen?
A name attribútum lehetővé teszi számodra, hogy adatokat nyerj ki a select elemről, amikor a felhasználó elküldi az űrlapot.
Ha elhagyod a name attribútumot, akkor nem tudsz adatot kinyerni a select elemből.
:::</p>
<h2 id="parancsgombok-hozzaadasa-urlaphoz" tabindex="-1"><a class="header-anchor" href="#parancsgombok-hozzaadasa-urlaphoz"><span>Parancsgombok hozzáadása űrlaphoz</span></a></h2>
<p>Ahhoz, hogy bármi hasznát vehesd, az űrlapodnak szüksége lesz egy Elküld gombra, amely lehetővé teszi a felhasználó számára, hogy elküldje azt. A HTML könnyen lehetővé teszi számodra, hogy könnyen létrehozz egy Elküld gombot és más típusú gombokat, ahogyan szükséges. Például, lehet, hogy szeretnél hozzáadni egy Visszaállít gombot, amely visszaállítja az összes űrlapmezőt az alapértelmezett értékeire, lehetővé téve a felhasználó számára, hogy újra kezdje a kitöltést. Lehet, hogy hozzá szeretnéd adni a saját gombjaidat is, hogy segítséget nyújts a felhasználónak.</p>
<h3 id="parancsgombok-hozzaadasa-urlaphoz-1" tabindex="-1"><a class="header-anchor" href="#parancsgombok-hozzaadasa-urlaphoz-1"><span>Parancsgombok hozzáadása űrlaphoz</span></a></h3>
<ol>
<li>A Visual Studio Code-ban nyisd meg a fájlt, amely tartalmazza az űrlapot.</li>
<li>Nyisd meg a fájlt egy böngészőablakban.</li>
<li>A Visual Studio Code-ban kattints oda, hogy behelyezd a beszúrási pontot, ahova az első parancsgombot szeretnéd elhelyezni.
<code v-pre>A)</code> Szükség esetén írd be <code v-pre>&lt;br&gt;</code>, hogy sortörést hozz létre. A példa két <code v-pre>&lt;br&gt;</code> taget használ, hogy függőleges helyet adjon az űrlapon.</li>
<li>Írd be az <strong>in</strong> szót.
Megjelenik az automatikus kiterjesztések listája.</li>
<li>Kattints <strong>input:submit</strong>.
A Visual Studio Code beszúrja az <code v-pre>&lt;input&gt;</code> taget, beleértve a type attribútumot a submit értékkel és a value attribútumot üres értékkel:</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="@source/demo/images/11-fejezet/2024-03-05 11 22 16.png" alt="" loading="lazy"> 6. Az insertálási pontot a value dupla idézőjelei közé helyezd, majd írd be a Submit gomb megjelenítési szövegét - például: <strong>Submit</strong> vagy <strong>Submit This Form</strong>. 7. Kattints a <strong>Refresh</strong>-re <br>
Az weboldal frissül. <br>
<code v-pre>B)</code> Megjelenik az Elküld gomb. 8. Ha az űrlapodnak szüksége van egy Visszaállít gombra, ismételd meg a 4. és 7. lépéseket. Ezúttal kattints az <code v-pre>input:reset</code> lehetőségre az automatikus kiterjesztések listáján, és a value attribútumhoz rendeld hozzá a &quot;Reset&quot; szöveget. 9. Kattints a <code v-pre>Refresh</code>-re <br>
A weboldal frissül. <br>
<code v-pre>C)</code> Megjelenik a Visszaállít gomb. 10. Ha hozzá szeretnél adni egy gombot, amely megjeleníti az információs párbeszédpanelt, ismételd meg a 4. és 7. lépéseket. Ezúttal kattints az <code v-pre>input:button</code> lehetőségre az automatikus kiterjesztések listáján, és a value attribútumhoz rendeld hozzá a gomb megjelenítési szövegét.
Ebben a példában a &quot;További információ&quot; szöveget használjuk.</p>
<figure><img src="@source/demo/images/11-fejezet/2024-03-05 11 23 00.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="11">
<li>Kattints a <code v-pre>&lt;input&gt;</code> záró &gt; jelére és add hozzá az onclick paramétert, megadva az alertet dupla idézőjelben, és az üzenetet, amit megjeleníteni szeretnél zárójelben és egyszeres idézőjelben. Ebben a példában ez a kijelentés szerepel:</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
	<span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span>
	<span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>További információ<span class="token punctuation">"</span></span>
	<span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'Kérjük, lépj kapcsolatba az ügyfélszolgálatunkkal segítségért.'</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="12">
<li>Kattints a <strong>Refresh</strong>-re. <br>
Az weboldal frissül.</li>
<li>Kattints a gombra.
Megjelenik az alert párbeszédpanel.
:::tipp TIPP:
Egy hosszabb űrlapot hogyan lehet szakaszokra bontani?
Egy űrlapot különböző mezőcsoportokra oszthatsz a <code v-pre>fieldset</code> elem használatával. Azonosítsd azokat a form elemeket, amelyeket az első mezőcsoportba szeretnél felvenni, majd írj be egy nyitó <code v-pre>&lt;fieldset&gt;</code> címkét a legelső elem elé, és egy záró <code v-pre>&lt;/fieldset&gt;</code> címkét az utolsó elem után. A nyitó <code v-pre>&lt;fieldset&gt;</code> címke után írj be egy <code v-pre>legend</code> elemet a szöveges tartalommal, amely megfelel az adott űrlapszakasznak, például <code v-pre>&lt;legend&gt;Elérhetőségi adatok&lt;/legend&gt;</code>. Ismételd meg ezt a folyamatot minden más űrlapszakaszra.
:::</li>
</ol>
</div></template>


