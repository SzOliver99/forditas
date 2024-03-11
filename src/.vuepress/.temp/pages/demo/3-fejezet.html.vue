<template><div><h2 id="ismerje-meg-a-weboldalak-strukturalasanak-elemeit" tabindex="-1"><a class="header-anchor" href="#ismerje-meg-a-weboldalak-strukturalasanak-elemeit"><span>Ismerje meg a weboldalak strukturálásának elemeit</span></a></h2>
<p>A HTML lehetővé teszi, hogy a weboldalak strukturálásához sokféle elemet használjon. Néhány elem, mint például a fejléc és a lábléc elem, szemantikusak, ami azt jelenti, hogy a nevük egyértelműen kifejezi szerepüket: A fejléc elem a weboldal vagy egy másik weboldal tetejére kerül, a lábléc elem pedig az oldal aljára kerül. Más elemek nem szemantikusak, ami azt jelenti, hogy a nevük nem fejezi ki egyértelműen a szerepüket; például a span elem egy rövid szövegrészletet, a div elem pedig egy hosszabb szövegrészletet határoz meg, anélkül, hogy kifejezné, hogy az oldalt ezek a szakaszok képviselik.</p>
<h3 id="szemantikus-es-nem-szemantikus-elemek-megragadasa" tabindex="-1"><a class="header-anchor" href="#szemantikus-es-nem-szemantikus-elemek-megragadasa"><span>Szemantikus és nem szemantikus elemek megragadása</span></a></h3>
<p>A weboldalak strukturálásához szemantikus elemeket fog használni, mint például a fejléc elem, a figure elem és a section elem. A weboldalak formázásához szemantikus és nem szemantikus elemeket is fog használni, például a span elemet és a div elemet.</p>
<p>A 3-1. táblázat ismerteti a leghasznosabb nem szemantikus és szemantikus elemeket.</p>
<table>
<thead>
<tr>
<th style="text-align:left"></th>
<th style="text-align:left">3-1. táblázat: Nem szemantikus elemek és szemantikus elemek</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><strong>Elem</strong></td>
<td style="text-align:left"><strong>Magyarázat</strong></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"><strong>Nem szemantikus elemek</strong></td>
</tr>
<tr>
<td style="text-align:left"><em>span</em></td>
<td style="text-align:left">Egy bekezdés vagy más rövid elem egy részét jelöli ki.</td>
</tr>
<tr>
<td style="text-align:left"><em>div</em></td>
<td style="text-align:left">Egy vagy több bekezdést vagy más elemet jelöl ki.</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"><strong>Szemantikus elemek</strong></td>
</tr>
<tr>
<td style="text-align:left"><em>article</em></td>
<td style="text-align:left">Tartalmaz egy &quot;cikket&quot;, a weboldal önálló részét. Például egy weboldal több cikk elemet tartalmazhat, amelyek mindegyike külön témát tartalmaz.</td>
</tr>
<tr>
<td style="text-align:left"><em>aside</em></td>
<td style="text-align:left">Általában kis mennyiségű tartalmat tartalmaz, amely közvetve kapcsolódik a közeli tartalomhoz vagy oldalhoz.</td>
</tr>
<tr>
<td style="text-align:left"><em>details</em></td>
<td style="text-align:left">Olyan extra információkat tartalmaz, amelyeket az olvasó kibontva elolvashat vagy összecsukva elrejthet. Az esetében például egy details elem egy widgetként működhet, amely megjelenítheti vagy elrejtheti a benne lévő információkat.</td>
</tr>
<tr>
<td style="text-align:left"><em>figcaption</em></td>
<td style="text-align:left">Egy ábraelem feliratát tartalmazza. Ez az elem beágyazható akár az első gyermekelemként vagy az ábra elem utolsó gyermekelemeként is szerepelhet.</td>
</tr>
<tr>
<td style="text-align:left"><em>figure</em></td>
<td style="text-align:left">Egy illusztrációt tartalmaz, például egy fényképet, egy diagramot vagy egy kódlistát.</td>
</tr>
<tr>
<td style="text-align:left"><em>footer</em></td>
<td style="text-align:left">A weboldal vagy egy adott elem alján megjelenítendő információt tartalmaz, például szerzői jogi információk, elérhetőségi adatok vagy az oldal utolsó frissítéséne időpontja.</td>
</tr>
<tr>
<td style="text-align:left"><em>header</em></td>
<td style="text-align:left">A weboldal vagy egy adott elem tetején megjelenítendő információkat	tartalmaz, például egy fejléc és bevezető vagy navigációs hivatkozások.</td>
</tr>
<tr>
<td style="text-align:left"><em>main</em></td>
<td style="text-align:left">Az oldal fő tartalmát tartalmazza. Egy HTML-fájl csak egy fő elemet tartalmazhat. A fő elem tartalmazhat olyan elemeket, mint cikk, oldal, lábléc, fejléc, és nav elemeket, de nem helyezhető el egyik ilyen elemen belül sem.</td>
</tr>
<tr>
<td style="text-align:left"><em>mark</em></td>
<td style="text-align:left">Megjelölt vagy kiemelt szöveget tartalmaz. A böngészők alapértelmezés szerint a mark elemet fekete színnel jelenítik meg sárga háttéren.</td>
</tr>
<tr>
<td style="text-align:left"><em>nav</em></td>
<td style="text-align:left">Navigációs linkeket tartalmaz. A linkek célpontjai lehetnek akár az oldalon belül, akár azon kívül.</td>
</tr>
<tr>
<td style="text-align:left"><em>section</em></td>
<td style="text-align:left">Egy weboldal egy szakaszát tartalmazza. Például, ha egy oldal több témát tárgyal a h2 szinten, akkor minden egyes témához létrehozhat egy-egy szakaszelemet.</td>
</tr>
<tr>
<td style="text-align:left"><em>summary</em></td>
<td style="text-align:left">Tartalmaz egy látható címet a részletek elemen belül. A néző rákattinthat a címsorra a részletek megjelenítéséhez.</td>
</tr>
<tr>
<td style="text-align:left"><em>time</em></td>
<td style="text-align:left">Egy időpontot vagy egy dátumot és egy időpontot tartalmaz. Az idő elem rendelkezik egy datetime attribútummal, amely gépileg olvasható időpontot szolgáltat, amelyet a keresőmotorok és a böngészők használhatnak.</td>
</tr>
</tbody>
</table>
<figure><img src="@source/demo/images/3-fejezet/53.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>A fenti ábra egy szemantikus elemekkel strukturált weboldal bontását mutatja.</p>
<h2 id="elemek-kivalasztasa-span-es-div-elemekkel" tabindex="-1"><a class="header-anchor" href="#elemek-kivalasztasa-span-es-div-elemekkel"><span>Elemek kiválasztása span és div elemekkel</span></a></h2>
<p>A HTML span és div elemei lehetővé teszik, hogy csak annyi szöveget adjon meg, amennyire szüksége van, hogy meg tudja formázni. A span elemet jellemzően a bekezdésen belüli szöveg azonosítására használja, vagy egy másik rövid elemben. Például egy span elemet használhatsz olyan szöveg azonosítására, amelyhez meghatározott betűtípus-formázást szeretne alkalmazni. Hasonlóképpen, egy div elemet használhat egy &quot;felosztás&quot; megadására vagy egy adott szövegrészletet, amely általában egy vagy több bekezdésből áll. Ezután alkalmazhatja a formázást, például egy keretet az egész részre.</p>
<h3 id="elemek-kivalasztasa-span-es-div-elemekkel-1" tabindex="-1"><a class="header-anchor" href="#elemek-kivalasztasa-span-es-div-elemekkel-1"><span>Elemek kiválasztása span és div elemekkel</span></a></h3>
<p><strong>Szöveg kiválasztása a span elemmel</strong></p>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>A szakasz végigdolgozásához a következőkre van lehetőség: kikapcsolhatja a Visual Studio Code HTML Auto Záró címkék funkciót ideiglenesen.</p>
<p>Lásd az első tippet.</p>
</div>
<ol>
<li>
<p>A Visual Studio Code-ban nyissa meg a fájlt, amelyet
használni kíván.</p>
</li>
<li>
<p>Nyissa meg a fájlt egy böngészőablakban.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattintson oda ahol el akarja kezdeni a tartományt.</p>
</li>
<li>
<p>Írja be a nyitó <code v-pre>&lt;span&gt;</code> taget, beleértve a stílusattribútumot és a formázást a piros színt alkalmazva a szövegre:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span>red</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Írja be a span szöveges tartalmát.</p>
</li>
</ol>
<div class="hint-container caution">
<p class="hint-container-title">Megjegyzés:</p>
<p>A spanban lévő szöveg felhasználásához kattintson a szöveg végére.</p>
</div>
<ol start="6">
<li>
<p>Írja be a záró <code v-pre>&lt;/span&gt;</code> taget:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Írjon be bármilyen szöveget, amely a span element után következik - például a maradék bekezdést.</p>
</li>
<li>
<p>Kattintson a frissítésre <br>
A böngésző megjeleníti a frissített weboldalt.</p>
<p><code v-pre>A)</code> A span elem szövege piros színnel jelenik meg</p>
</li>
</ol>
<figure><img src="@source/demo/images/3-fejezet/54.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="szoveg-kivalasztasa-a-div-elemmel" tabindex="-1"><a class="header-anchor" href="#szoveg-kivalasztasa-a-div-elemmel"><span>Szöveg kiválasztása a div elemmel</span></a></h3>
<ol>
<li>
<p>Kattintson arra a helyre, ahol a div elemet szeretné elkezdeni.</p>
</li>
<li>
<p>Írja be a nyitó <code v-pre>&lt;div&gt;</code> taget, beleértve a stílus attribútumot és a jobbra igazítást alkalmazó formázást is a szöveghez:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">text-align</span><span class="token punctuation">:</span>right</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Nyomja meg kétszer az &quot;Enter&quot; billentyűt, majd írja be a befejező</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span> taget:
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Kattintson a gombra a beszúrási pont üres sorba helyezéséhez.</p>
</li>
<li>
<p>Írjon be egy h2 elemet és egy vagy több p elemet, például:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Teljes méretű billentyűzetek<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>A teljes méretű billentyűzetek általában körülbelül 17 hüvelyk szélesek.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Kattintson a záró <code v-pre>&lt;/div&gt;</code> kód után, nyomja meg a, majd írjon be egy másik p elemet - például: <code v-pre>&lt;p&gt;</code>A teljes méretű billentyűzetek általában 104 és 108 gombot tartalmaznak.<code v-pre>&lt;/p&gt;</code></p>
</li>
<li>
<p>Kattintson a Frissítés gombra <br>
A böngésző megjeleníti a frissített weboldalt.</p>
<p><code v-pre>B)</code> A div elemben lévő szöveg jobbra van igazítva.</p>
<p><code v-pre>C)</code> A div elem utáni szöveg balra áll vissza, az alapértelmezetthez.</p>
</li>
</ol>
<figure><img src="@source/demo/images/3-fejezet/55.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container info">
<p class="hint-container-title">Tippek</p>
<p><strong>Hogyan állíthatom le a Visual Studio Code záró címkék automatikus beillesztését?</strong>
Kapcsolja ki az Automatikus záró címkék funkciót. Nyomja meg a &quot;Control &quot;+ &quot;,&quot; billentyűkombinációt Windowson vagy Linuxon, vagy nyomja meg a &quot;&quot; + &quot;,&quot; Macen a Beállítások képernyő megjelenítéséhez. Kattintson a Keresés beállításai gombra, és írja be a html bezárása, majd szüntesse meg az Engedélyezés/tiltás jelölőnégyzetet HTML-címkék automatikus lezárásánál ( ).</p>
<p><strong>Hogyan formázhatom még a span elemeimet és a div elemeket?</strong>
Ahelyett, hogy a stílusformázást soron belül alkalmazná, használhatja a külső CSS-t a span elemek és div elemek formázására, ahogyan azt a 8. fejezetben ismertetjük. Ez a szakasz az elemeket soron belül formázza, hogy a példa könnyen áttekinthető maradjon. A külső CSS használata gyorsabb, hatékonyabb, és rugalmasabb, mint a közvetlen formázás.</p>
</div>
<h2 id="fejlecelemek-es-lablecelemek-letrehozasa" tabindex="-1"><a class="header-anchor" href="#fejlecelemek-es-lablecelemek-letrehozasa"><span>Fejlécelemek és láblécelemek létrehozása</span></a></h2>
<p>A fejléc elem segítségével fejlécet hozhat létre egy weboldalhoz. A fejléc elem a nyitó <code v-pre>&lt;header&gt;</code> taggel kezdődik és a záró <code v-pre>&lt;/header&gt;</code> taggel végződik; közöttük, általában egy vagy több fejlécet, valamint az oldalnak szükséges bevezető információkat helyezhet el. Lehet, hogy a fejléc elemet arra is használhatja, hogy navigációs hivatkozásokat adjon egy hosszú weboldal különböző részeihez. Hasonlóképpen létrehozhat egy láblécet a HTML-ben a lábléc elem segítségével, amely a nyitó <code v-pre>&lt;footer&gt;</code> taggel kezdődik és a záró <code v-pre>&lt;/footer&gt;</code> taggel végződik.</p>
<h3 id="fejlecelemek-es-lablecelemek-letrehozasa-1" tabindex="-1"><a class="header-anchor" href="#fejlecelemek-es-lablecelemek-letrehozasa-1"><span>Fejlécelemek és láblécelemek létrehozása</span></a></h3>
<ol>
<li>
<p>A Visual Studio Code-ban hozzon létre és mentsen el egy új fájlt, vagy nyisson meg egy meglévő fájlt, amit szeretne használni.</p>
</li>
<li>
<p>Nyissa meg a fájlt egy böngészőablakban, hogy láthassa az elvégzett módosítások eredményét.</p>
</li>
<li>
<p>A Visual Studio Code programban kattintsa a beszúrási pontot oda, ahol el akarja kezdeni a fejlécet.</p>
</li>
<li>
<p>Írja be a nyitó <code v-pre>&lt;header&gt;</code> taget, beleértve a stílusattribútumot a pontozott keret alkalmazásához:</p>
</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border-style</span><span class="token punctuation">:</span>dotted</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5">
<li>Nyomja meg kétszer, majd írja be a záró <code v-pre>&lt;/header&gt;</code> címkét:</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6">
<li>
<p>Kattintson a gombra a beszúrási pont elhelyezéséhez az üres sorba.</p>
</li>
<li>
<p>Írjon be a fejlécben megjelenítendő tartalmat elemhez, például:</p>
</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Billentyűzetméretek magyarázata<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Tanulja meg az alapvető tudnivalókat a következőkről a számítógépek különböző méreteiről billentyűzetek különböző típusairól.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8">
<li>
<p>Kattintson a Frissítés ( ) gombra. <br>
A böngésző megjeleníti a frissített oldalt.</p>
<p><code v-pre>A)</code> A fejléc pontozott kerettel jelenik meg.</p>
</li>
</ol>
<figure><img src="@source/demo/images/3-fejezet/56.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="9">
<li>
<p>Kattintson arra a helyre, ahol a láblécet szeretné kezdeni.</p>
</li>
<li>
<p>Írja be a nyitó <code v-pre>&lt;footer&gt;</code> taget, beleértve a stílusattribútumot, hogy először rendelje a background-color tulajdonsághoz a színt, majd a border-style tulajdonságot a solid típusú szolid tulajdonsággal:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">background-color</span><span class="token punctuation">:</span>aqua<span class="token punctuation">;</span> <span class="token property">border-style</span><span class="token punctuation">:</span>solid</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>A két tulajdonságot különítsük el egy pontosvesszővel.</p>
</div>
<ol start="11">
<li>Írjon szöveget a lábléc elemhez, például:<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Copyright <span class="token entity named-entity" title="&copy;">&amp;copy;</span> 2023 M.Jones Productions<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>A © a HTML-kód a copyright szimbólum, ©. Lásd a &quot;A HTML entitáskódok megértése&quot; című fejezetben található további információkért.</p>
</div>
<ol start="12">
<li>
<p>Írja be a záró <code v-pre>&lt;/footer&gt;</code> taget:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Kattintson a Frissítés ( ) gombra. <br>
<code v-pre>A)</code> A böngésző megjeleníti a frissített oldalt.</p>
<p><code v-pre>B)</code> A lábléc egyszínű szegéllyel jelenik meg és vízszínű háttérrel.</p>
</li>
</ol>
<figure><img src="@source/demo/images/3-fejezet/57.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">Tippek</p>
<p>Létrehozhatok több fejléc elemet egy weboldalon?
Igen - annyi fejlécelemet hozhat létre, amennyire szüksége van. Minden egyes fejlécelemnek különállónak kell lennie:
Nem lehet egy fejlécelemet egy másik fejlécelembe fészkelni. Nem helyezhet el fejléc elemet egy lábléc elemen belül - ahogyan azt valószínűleg elvárná - vagy egy cím elemen belül. Hasonlóképpen, több lábléc elemet is létrehozhat, de nem helyezhet lábléc elemet egy láblécelembe, fejlécelembe vagy címelembe.</p>
</div>
<h2 id="cikk-elemek-hozzaadasa-az-oldalhoz" tabindex="-1"><a class="header-anchor" href="#cikk-elemek-hozzaadasa-az-oldalhoz"><span>Cikk elemek hozzáadása az oldalhoz</span></a></h2>
<p>Amikor egy oldal önálló tartalmi témákat tartalmaz, használhatja az elemet ezek az oldalak
bemutatására. Egy cikk bármilyen hosszúságú és bonyolultságú lehet, amennyit a téma és a
lefedettség megkíván. A példa cikkek ebben a részben nagyon rövidek a könyvoldal korlátai miatt.</p>
<h3 id="cikk-elemek-hozzaadasa-az-oldalhoz-1" tabindex="-1"><a class="header-anchor" href="#cikk-elemek-hozzaadasa-az-oldalhoz-1"><span>Cikk elemek hozzáadása az oldalhoz:</span></a></h3>
<ol>
<li>
<p>A Visual Studio Code-ban hozzon létre és mentsen el egy új fájlt, vagy nyissa meg a már meglévő fájlt, amelyet szeretne használni.</p>
</li>
<li>
<p>Nyissa meg a fájlt egy böngészőablakban, hogy láthassa a változások eredményeit.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattintson oda, ahol el szeretné helyezni az első cikk elemet.</p>
</li>
<li>
<p>Írja be az <code v-pre>&lt;article&gt;</code> nyitó címke kódot, beleértve a style attribútumot a border-style: dotted értékkel, hogy az elem terjedelme könnyen látható legyen.</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border-style</span><span class="token punctuation">:</span> dotted</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Írja be a cikk tartalmát, például:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>clicky Switches<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>clicky switches give audible clicks each time you press them down.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Írja be a záró <code v-pre>&lt;/article&gt;</code> címkét:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Kattintson a Frissítésre (C). <br>
<code v-pre>A)</code> böngésző frissíti az oldalt, és a cikk megjelenik pontozott kerettel.</p>
</li>
</ol>
<figure><img src="@source/demo/images/3-fejezet/58.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="8">
<li>
<p>Nyomja meg az Enter billentyűt, majd írja be a nyitó <code v-pre>&lt;article&gt;</code> címkét egy másik cikkhez, ismét
kijelölve a pontozott keretet:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border-style</span><span class="token punctuation">:</span> dotted</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Írja be a cikk tartalmát - például:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Tapintási kapcsolók<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>A tapintási kapcsolók érzékelhető dudort adnak, de nincs kattanás, amikor lenyomják őket.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Írja be a záró <code v-pre>&lt;/article&gt;</code> címkét:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Kattintson az Frissítésre (C). <br>
A második cikk megjelenik.</p>
</li>
<li>
<p>Ismételje meg a 8-10. lépéseket egy harmadik cikk hozzáadásához - például:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border-style</span><span class="token punctuation">:</span> dotted</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Liner kapcsolók<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>A lineáris kapcsolók nem adnak ki hallható kattanást vagy érzékelhető dudort, amikor lenyomják.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Írjon megjegyzést arról, hogy szükséges egy másik cikket hozzáadni:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- optikai kapcsolók hozzáadása --></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Írjon egy bekezdést - például:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Az oldal többi része részletesen ismerteti ezeket a típusokat.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<figure><img src="@source/demo/images/3-fejezet/59.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="15">
<li>
<p>Kattintson az Frissítésre (C). <br>
<code v-pre>C)</code> A harmadik cikk megjelenik.</p>
<p><code v-pre>D)</code> A bekezdés a harmadik cikk után következik.</p>
</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Tipp</p>
<p><strong>Hogyan állíthatom meg, hogy a keret érintse meg a cikk szöveteit?</strong></p>
<p>A cikk elemre padding-ot alkalmazhat, hogy némi helyet teremtsen a keret és az elem tartalma között. Ebben a szakaszban próbálja meg megváltoztatni a <code v-pre>&lt;article style=&quot;border-style:dotted&quot;&gt;</code>-t <code v-pre>&lt;article style=&quot;border-style: dotted; padding:10px&quot;&gt;</code>-ra, ami 10 pixel paddingot helyezz el felülre, alulra, balra és jobbra. Különböző paddingot is alkalmazhat az egyes oldalakon. További részletekért lásd a 9. fejezetben található &quot;Padding és keretek megadása egy elemhez&quot; részt.</p>
</div>
<h2 id="hozzon-letre-kiemelt-idezeteket-az-aside-elemmel" tabindex="-1"><a class="header-anchor" href="#hozzon-letre-kiemelt-idezeteket-az-aside-elemmel"><span>Hozzon létre kiemelt idézeteket az aside elemmel</span></a></h2>
<p>Az HTML szemantikus elemei közé tartozik az aside elem, amelyet arra használhat, hogy elválassza a tartalmat a körülötte lévő tartalomtól. Az aside elem hasznos lehetőség lehet a weboldal egy részének kiemelésére vagy az olvasó figyelmének felhívására az aside elem elhelyezkedésében. Az aside elemnek nincs konkrét pozíciója, de a style attribútumot használhatja az aside elem pozícionálásához és formázásához, szükség szerint, hogy illeszkedjen a weboldalához.</p>
<h3 id="keszitsen-kiemelt-idezeteket-az-aside-elemmel" tabindex="-1"><a class="header-anchor" href="#keszitsen-kiemelt-idezeteket-az-aside-elemmel"><span>Készítsen kiemelt idézeteket az aside elemmel:</span></a></h3>
<ol>
<li>
<p>A Visual Studio Code-ban hozzon létre és mentse el az új fájlt, vagy nyissa meg a meglévő fájlt, amelyet használni szeretne.</p>
</li>
<li>
<p>Nyissa meg a fájlt egy böngészőablakban, hogy lássa a változtatások eredményeit.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattintson arra a helyre, ahol el szeretné helyezni az aside elemet.</p>
</li>
<li>
<p>Írja be az <code v-pre>&lt;aside&gt;</code> nyitó címkét:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Írja be a aside elemen megjeleníteni kívánt tartalmat - például: Szánjon időt arra, hogy megismerje a különböző billentyűkapcsoló típusokat.</p>
</li>
<li>
<p>Írja be a <code v-pre>&lt;/aside&gt;</code> záró címkét:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Kattintson a Frissítésre (C). <br>
<code v-pre>A)</code> Az aside elem megjelenik az oldalon.</p>
<p>Mivel nem adott meg stílusformázást, az aside elem úgy jelenik meg, mint a többi bekezdés.</p>
</li>
</ol>
<figure><img src="@source/demo/images/3-fejezet/60.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="8">
<li>
<p>Kattintson az <code v-pre>&lt;aside&gt;</code> nyitó címke záró &gt; jele előtt, és gépelje be a style attribútumot, megadva a width:33% és float: right értékeket, így a címke így néz ki:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>33%<span class="token punctuation">;</span> <span class="token property">float</span><span class="token punctuation">:</span>right</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Kattintson a Frissítésre (C). <br>
<code v-pre>B)</code> Az aside elem megjelenik az oldal harmadánál és jobbra lebeg.</p>
</li>
<li>
<p>Kattintson a float: right után, a dupla idézőjel elött, és folytassa a style attribútum formázását, hozzáadva a background-color:lightskyblue és a padding:10px értékeket. A teljes címke így néz ki:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>33%<span class="token punctuation">;</span> <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span> <span class="token property">background-color</span><span class="token punctuation">:</span> lightskyblue<span class="token punctuation">;</span> <span class="token property">padding</span><span class="token punctuation">:</span>10px</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Kattintson a Frissítésre (C). <br>
<code v-pre>C)</code> Az aside elem egy világoskék háttért kap és minden oldalon 10 pixel paddinget.</p>
</li>
</ol>
<figure><img src="@source/demo/images/3-fejezet/61.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">TIPP</p>
<p><strong>Milyen egyéb felhasználási módjai vannak az <em>aside</em> elemnek?</strong>
Az aside elemet a kiemelt idézetek létrehozásán kívül, ahogyan ebben a szakaszban is láthatjuk,
széles körben alkalmazzák oldalsávok létrehozásához, navigációs elemek implementálásához és
reklámozáshoz.</p>
</div>
<h2 id="oldal-felosztasa-az-elemek-szakasz-hasznalataval" tabindex="-1"><a class="header-anchor" href="#oldal-felosztasa-az-elemek-szakasz-hasznalataval"><span>Oldal felosztása az Elemek szakasz használatával</span></a></h2>
<p>A HTML-ben a section elem használatával oszthatod fel a weboldalad több részre. Mivel a section egy szemantikus elem, a részekre való felosztásnak logikusnak kell lennie, de praktikus célokra is használható Például alkalmazhat formázást egy szakaszelem összes gyermekelemére egyidejűleg, ha megadja a szakaszelem formázását.</p>
<ol>
<li>
<p>A Visual Studio Code-ban hozzon létre és mentsen el egy új fájlt, vagy nyissa meg a meglévő fájlt, amit használni szeretne.</p>
</li>
<li>
<p>Nyissa meg a fájlt egy böngészőablakban, hogy láthassa a változtatások eredményét.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattintson arra a helyre, ahol el szeretné kezdeni az első section elemet.</p>
</li>
<li>
<p>Nyisd meg a kezdő <code v-pre>&lt;section&gt;</code> tag-et: <code v-pre>&lt;section&gt;</code></p>
</li>
<li>
<p>Írd be az első szakasz tartalmát. A példa tartalmaz egy h2 elemet és egy p elemet:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Introduction<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>The Anne Pro 2 from Obinslab is a 60%-size mechanical keyboard with built-in wireless connectivity.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Írd be a záró <code v-pre>&lt;/section&gt;</code> tag-et: <code v-pre>&lt;/section&gt;</code></p>
</li>
<li>
<p>Kattints a frissítés gombra. <br>
<code v-pre>A)</code> A section elem tartalma megjelenik a weboldalon.</p>
<p>Nincs látható jele hogy a section elem létezik.</p>
</li>
</ol>
<figure><img src="@source/demo/images/3-fejezet/62.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="8">
<li>
<p>Kattints a Visual Studio Code ablakra és írd be a nyitó <code v-pre>&lt;section&gt;</code> elemet, ezúttal tartalmazza a style attribútumot és megadja a borderstyle:dahed:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border-style</span><span class="token punctuation">:</span>dashed</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Írd be a második rész tartalmát. A példa egy h2 elemet valamint egy p elemet is tartalmaz:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Review Considerations<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>This review is intended for general users, not for gamers specifically.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>˛
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Írja be a záró <code v-pre>&lt;/section&gt;</code> tag-et: <code v-pre>&lt;/section&gt;</code></p>
</li>
<li>
<p>Kattints a frissítés gombra. <br>
<code v-pre>B)</code> A szakasz tartalma szaggatott vonallal jelenik meg.</p>
</li>
<li>
<p>Kattintson a záró <code v-pre>&lt;/section&gt;</code> címke elé, és írja be a <code v-pre>&lt;section&gt;</code> alszakasz nyitócímkéjét, beleértve a style attribútumot és a backgroundcolor:lightyellow megadását:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css">background <span class="token property">color</span><span class="token punctuation">:</span> lightyellow</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Irj le egy h3 és egy p elemet. Például:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>Switch Type/h3>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>The review keyboard uses blue (clicky) key switches.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<figure><img src="@source/demo/images/3-fejezet/63.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="14">
<li>
<p>Írja be az <code v-pre>&lt;/section&gt;</code> alszakasz záró címkéjét:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Kattints a frissítés gombra. <br>
<code v-pre>C)</code> Az alszakasz megjelenik az oldalon.</p>
</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Tipp</p>
<p><strong>Mi a különbség a <em>section</em> elem és a <em>div</em> elem között?</strong>
Mind a section elem, mind a div elem lehetővé teszi a gyermekelemek csoportosítását és
opcionálisan formázás alkalmazását egyszerre; Gyakran látni fogja, hogy a Section és a Div többékevésbé felcserélhető. A szakasz azonban szemantikai elem, amelynek célja azt sugallni, hogy minden
tartalma ugyanarra a témára vonatkozik, míg a div egy nem szemantikai elem, amely nem hordoz
ilyen következményt.</p>
<p>A legjobb gyakorlat a szemantikai elemek, például a section elem és a article elem használata a
weboldal bizonyos szakaszainak logikus azonosításához, és a div elem használata csak akkor, ha nincs
megfelelő szemantikai elem</p>
</div>
<h2 id="osszecsukhato-szakaszok-letrehozasa" tabindex="-1"><a class="header-anchor" href="#osszecsukhato-szakaszok-letrehozasa"><span>Összecsukható szakaszok létrehozása</span></a></h2>
<p>A details elem lehetővé teszi olyan tartalomszakaszok létrehozását, amelyeket a felhasználó szükség szerint kibonthat és összecsukhat. Létrehozhat például egy Gyakran ismételt kérdések lapot a webhelyéhez, amely először olyan kérdések listájaként jelenik meg, amelyek válaszai nem láthatók. Egy kérdésre kattintva a felhasználó kibonthatja a tartalom szakaszt a válasz megjelenítéséhez; A válasz elolvasása után a felhasználó ismét rákattinthat a kérdésre, hogy még egyszer elrejtse a választ. A hatás létrehozásához használja a details elemet a kibontáshoz és az összecsukáshoz, az összefoglaló elemet pedig az eredetileg látható szöveg megjelenítéséhez.</p>
<ol>
<li>
<p>A Visual Studio Code-ban hozz létre és ments el egy új fájlt, vagy nyisd meg a használni kívánt
meglévő fájlt.</p>
</li>
<li>
<p>Nyisd meg a fájlt egy böngészőablakban, hogy lásd az elvégzett módosítások eredményét.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattintással helyezze a beszúrási pontot oda, ahol az első details elemet kezdeni szeretné.</p>
</li>
<li>
<p>Írja be a &lt;<code v-pre>details&gt;</code> nyitócímkét, nyomja le kétszer az (enter) billentyűt, majd írja be a záró <code v-pre>&lt;/details&gt;</code> címkét:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>details</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>details</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Kattintson a <code v-pre>&lt;details&gt;</code> címke és a <code v-pre>&lt;/details&gt;</code> címke közé, és írja be a <code v-pre>&lt;summary&gt;</code> nyitócímkét, annak tartalmát és a záró <code v-pre>&lt;/summary&gt;</code> címkét – például:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span>What is a mechanical keyboard?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Írja be azt a tartalmat, amelyet a details elem kattintásra megjelenít, például:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>A mechanical keyboard is a keyboard that uses key switches rather than a membrane to register keystrokes.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Kattints a frissítés gombra. <br>
<code v-pre>A)</code> A details elem megjelenik, de összecsukva, így csak az összefoglaló elem látható.</p>
</li>
<li>
<p>Kattints a bővítés gombra. (a → átvált ↓-ra) <br>
<code v-pre>B)</code> A details elem kinyílik, láthatóvá válik a tartalma.</p>
<p><code v-pre>C)</code> Kattints a bezárás gombra (a ↓ átvált →-ra) ha el szeretnéd tüntetni a details elemet.</p>
</li>
</ol>
<figure><img src="@source/demo/images/3-fejezet/64.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="9">
<li>
<p>Kattins a details elem után a Visual Studio Code-ban, majd írj egy új details elemet, amely tartalmazza a summary elemet. Például:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>details</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span>What advantagesdo mechanical keyboards offer?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Mechanical keyboards feel better to type on and enable some people to type faster.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>details</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Kattintson a <code v-pre>&lt;/details&gt;</code> második details elem záró címkéje elé (nem látható).</p>
</li>
<li>
<p>Írj egy beágyazott details elemet. Add meg style attribútomként a margin-left:20px értéket, mint ebben a példában:.</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>details</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-left</span><span class="token punctuation">:</span>20px</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>summary</span><span class="token punctuation">></span></span>Keyboard Feedback<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>summary</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Keyboard feedback can contribute to both typing enjoyment and speed.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>details</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<figure><img src="@source/demo/images/3-fejezet/65.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="12">
<li>
<p>Kattints a frissítés gombra. <br>
Megjelenik a frissített lap.</p>
<p><code v-pre>D)</code> A külső details elemet és a beágyazott details elemet is kibonthatja.</p>
</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Tipp</p>
<p><strong>Muszáj alkalmaznom a <em>summary</em> elemet minden egyes <em>details</em> elemben?</strong></p>
<p>Általában hasznos a summary elem beillesztése, mert lehetővé teszi a megfelelő szöveg
megjelenítését a Részletek elem kiterjesztése nyilához () a details elem mellett. Azonban elhagyhatja
a summary elemet anélkül, hogy hibát okozna. Ha így tesz, az HTML a Részletek alapértelmezett
szövegét jeleníti meg a Kiterjesztés nyilához ().</p>
</div>
</div></template>


