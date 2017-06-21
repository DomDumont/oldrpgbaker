<map version="freeplane 1.5.9">
<!--To view this file, download free mind mapping software Freeplane from http://freeplane.sourceforge.net -->
<node TEXT="App" FOLDED="false" ID="ID_417189795" CREATED="1497947795226" MODIFIED="1498071784940" STYLE="oval">
<font SIZE="18"/>
<hook NAME="MapStyle">
    <properties fit_to_viewport="false;" show_note_icons="true" show_icon_for_attributes="true"/>

<map_styles>
<stylenode LOCALIZED_TEXT="styles.root_node" STYLE="oval" UNIFORM_SHAPE="true" VGAP_QUANTITY="24.0 pt">
<font SIZE="24"/>
<stylenode LOCALIZED_TEXT="styles.predefined" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="default" COLOR="#000000" STYLE="fork">
<font NAME="SansSerif" SIZE="10" BOLD="false" ITALIC="false"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.details"/>
<stylenode LOCALIZED_TEXT="defaultstyle.attributes">
<font SIZE="9"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.note" COLOR="#000000" BACKGROUND_COLOR="#ffffff" TEXT_ALIGN="LEFT"/>
<stylenode LOCALIZED_TEXT="defaultstyle.floating">
<edge STYLE="hide_edge"/>
<cloud COLOR="#f0f0f0" SHAPE="ROUND_RECT"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.user-defined" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="styles.topic" COLOR="#18898b" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subtopic" COLOR="#cc3300" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subsubtopic" COLOR="#669900">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.important">
<icon BUILTIN="yes"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.AutomaticLayout" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="AutomaticLayout.level.root" COLOR="#000000" STYLE="oval" SHAPE_HORIZONTAL_MARGIN="10.0 pt" SHAPE_VERTICAL_MARGIN="10.0 pt">
<font SIZE="18"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,1" COLOR="#0033ff">
<font SIZE="16"/>
<edge COLOR="#ff0000"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,2" COLOR="#00b439">
<font SIZE="14"/>
<edge COLOR="#0000ff"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,3" COLOR="#990000">
<font SIZE="12"/>
<edge COLOR="#00ff00"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,4" COLOR="#111111">
<font SIZE="10"/>
<edge COLOR="#ff00ff"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,5">
<edge COLOR="#00ffff"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,6">
<edge COLOR="#7c0000"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,7">
<edge COLOR="#00007c"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,8">
<edge COLOR="#007c00"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,9">
<edge COLOR="#7c007c"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,10">
<edge COLOR="#007c7c"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,11">
<edge COLOR="#7c7c00"/>
</stylenode>
</stylenode>
</stylenode>
</map_styles>
</hook>
<hook NAME="AutomaticEdgeColor" COUNTER="3" RULE="ON_BRANCH_CREATION"/>
<hook NAME="accessories/plugins/AutomaticLayout.properties" VALUE="ALL"/>
<node TEXT="FrontEnd" POSITION="right" ID="ID_1169011085" CREATED="1497947976359" MODIFIED="1497948000189">
<edge COLOR="#ff0000"/>
<node TEXT="Learn React" ID="ID_1679880997" CREATED="1497953151508" MODIFIED="1497953155429"/>
<node TEXT="Learn Redux" ID="ID_1742864635" CREATED="1497953161230" MODIFIED="1497953165804"/>
<node TEXT="Cr&#xe9;er une interface pour se logger" ID="ID_1832136051" CREATED="1497967046477" MODIFIED="1497967056192"/>
<node TEXT="Cr&#xe9;er une interface pour lister les maps" ID="ID_167850598" CREATED="1497967067198" MODIFIED="1497967097376"/>
</node>
<node TEXT="BackEnd" POSITION="left" ID="ID_1345437940" CREATED="1497947983630" MODIFIED="1497952857892">
<edge COLOR="#0000ff"/>
<node TEXT="Learn Express" ID="ID_1504396904" CREATED="1497952931572" MODIFIED="1497952991452"><richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      http://expressjs.com/en/guide/using-middleware.html
    </p>
    <p>
      
    </p>
    <p>
      http://expressjs.com/en/guide/routing.html
    </p>
  </body>
</html>
</richcontent>
</node>
<node TEXT="Develop an API" LOCALIZED_STYLE_REF="AutomaticLayout.level,2" ID="ID_398417517" CREATED="1497952850664" MODIFIED="1498071665845"><richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      http://mherman.org/blog/2016/11/05/developing-a-restful-api-with-node-and-typescript/#.WUjYZevyiHs
    </p>
  </body>
</html>
</richcontent>
<node TEXT="Protect the API" ID="ID_1630483312" CREATED="1497952889730" MODIFIED="1497952895833">
<node TEXT="Learn passport" ID="ID_600133456" CREATED="1497966994158" MODIFIED="1497967002113">
<node TEXT="Learn passport-jwt" ID="ID_1318332524" CREATED="1498055775922" MODIFIED="1498055788603"/>
</node>
</node>
<node TEXT="Mongoose" ID="ID_681196038" CREATED="1497953088251" MODIFIED="1497953098771"><richcontent TYPE="NOTE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai
    </p>
  </body>
</html>
</richcontent>
<node TEXT="Learn mongoose" ID="ID_80352593" CREATED="1497953900064" MODIFIED="1497953904634"/>
</node>
<node TEXT="TDD" ID="ID_1497835557" CREATED="1498055801043" MODIFIED="1498055805974">
<node TEXT="Check exactly what to test in case of a rest API" ID="ID_746069029" CREATED="1498071543732" MODIFIED="1498071564825"/>
<node TEXT="Jest" ID="ID_1355669951" CREATED="1498071571315" MODIFIED="1498071575294"/>
<node TEXT="Mocha" ID="ID_421230618" CREATED="1498071581359" MODIFIED="1498071583772"/>
</node>
</node>
</node>
<node TEXT="Learn" POSITION="right" ID="ID_337648292" CREATED="1497952921157" MODIFIED="1497952924856">
<edge COLOR="#00ff00"/>
<node TEXT="Learn Typescript" ID="ID_1819441629" CREATED="1497953133287" MODIFIED="1497953138453"/>
</node>
</node>
</map>
