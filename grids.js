//type==norm -> Playable cell
//type==hide -> Not visible
var grids = new Object();

//9 to 25
grids['9 to 25'] = new Object();
grids['9 to 25']['rows'] = 5;
grids['9 to 25']['cols'] = 5;
grids['9 to 25']['html'] = `
    <p maxlength="1"type="norm"id="g11" class="griditem" pr="0" grid="11"></p>
    <p maxlength="1"type="norm"id="g21" class="griditem" pr="0" grid="21"></p>
    <p maxlength="1"type="norm"id="g31" class="griditem" pr="0" grid="31"></p>
    <p maxlength="1"type="norm"id="g41" class="griditem" pr="0" grid="41"></p>
    <p maxlength="1"type="norm"id="g51" class="griditem" pr="0" grid="51"></p>

    <p maxlength="1"type="norm"id="g12" class="griditem" pr="0" grid="12"></p>
    <p maxlength="1"type="norm"id="g22" class="griditem" pr="0" grid="22"></p>
    <p maxlength="1"type="norm"id="g32" class="griditem" pr="0" grid="32"></p>
    <p maxlength="1"type="norm"id="g42" class="griditem" pr="0" grid="42"></p>
    <p maxlength="1"type="norm"id="g52" class="griditem" pr="0" grid="52"></p>

    <p maxlength="1"type="norm"id="g13" class="griditem" pr="0" grid="13"></p>
    <p maxlength="1"type="norm"id="g23" class="griditem" pr="0" grid="23"></p>
    <p maxlength="1"type="norm"id="g33" class="griditem" pr="0" grid="33"></p>
    <p maxlength="1"type="norm"id="g43" class="griditem" pr="0" grid="43"></p>
    <p maxlength="1"type="norm"id="g53" class="griditem" pr="0" grid="53"></p>

    <p maxlength="1"type="norm"id="g14" class="griditem" pr="0" grid="14"></p>
    <p maxlength="1"type="norm"id="g24" class="griditem" pr="0" grid="24"></p>
    <p maxlength="1"type="norm"id="g34" class="griditem" pr="0" grid="34"></p>
    <p maxlength="1"type="norm"id="g44" class="griditem" pr="0" grid="44"></p>
    <p maxlength="1"type="norm"id="g54" class="griditem" pr="0" grid="54"></p>

    <p maxlength="1"type="norm"id="g15" class="griditem" pr="0" grid="15"></p>
    <p maxlength="1"type="norm"id="g25" class="griditem" pr="0" grid="25"></p>
    <p maxlength="1"type="norm"id="g35" class="griditem" pr="0" grid="35"></p>
    <p maxlength="1"type="norm"id="g45" class="griditem" pr="0" grid="45"></p>
    <p maxlength="1"type="norm"id="g55" class="griditem" pr="0" grid="55"></p>
`
//Doughnut
grids['Doughnut'] = new Object();
grids['Doughnut']['rows'] = 7;
grids['Doughnut']['cols'] = 7;
grids['Doughnut']['html'] = `
    <p maxlength="1"type="hide"id="g11" class="griditem" pr="0" grid="11"></p>
    <p maxlength="1"type="hide"id="g21" class="griditem" pr="0" grid="21"></p>
    <p maxlength="1"type="norm"id="g31" class="griditem" pr="0" grid="31"></p>
    <p maxlength="1"type="norm"id="g41" class="griditem" pr="0" grid="41"></p>
    <p maxlength="1"type="norm"id="g51" class="griditem" pr="0" grid="51"></p>
    <p maxlength="1"type="hide"id="g61" class="griditem" pr="0" grid="61"></p>
    <p maxlength="1"type="hide"id="g71" class="griditem" pr="0" grid="71"></p>

    <p maxlength="1"type="hide"id="g12" class="griditem" pr="0" grid="12"></p>
    <p maxlength="1"type="norm"id="g22" class="griditem" pr="0" grid="22"></p>
    <p maxlength="1"type="norm"id="g32" class="griditem" pr="0" grid="32"></p>
    <p maxlength="1"type="norm"id="g42" class="griditem" pr="0" grid="42"></p>
    <p maxlength="1"type="norm"id="g52" class="griditem" pr="0" grid="52"></p>
    <p maxlength="1"type="norm"id="g62" class="griditem" pr="0" grid="62"></p>
    <p maxlength="1"type="hide"id="g72" class="griditem" pr="0" grid="72"></p>
        
    <p maxlength="1"type="norm"id="g13" class="griditem" pr="0" grid="13"></p>
    <p maxlength="1"type="norm"id="g23" class="griditem" pr="0" grid="23"></p>
    <p maxlength="1"type="norm"id="g33" class="griditem" pr="0" grid="33"></p>
    <p maxlength="1"type="norm"id="g43" class="griditem" pr="0" grid="43"></p>
    <p maxlength="1"type="norm"id="g53" class="griditem" pr="0" grid="53"></p>
    <p maxlength="1"type="norm"id="g63" class="griditem" pr="0" grid="63"></p>
    <p maxlength="1"type="norm"id="g73" class="griditem" pr="0" grid="73"></p>
        
    <p maxlength="1"type="norm"id="g14" class="griditem" pr="0" grid="14"></p>
    <p maxlength="1"type="norm"id="g24" class="griditem" pr="0" grid="24"></p>
    <p maxlength="1"type="norm"id="g34" class="griditem" pr="0" grid="34"></p>
    <p maxlength="1"type="hide"id="g44" class="griditem" pr="0" grid="44"></p>
    <p maxlength="1"type="norm"id="g54" class="griditem" pr="0" grid="54"></p>
    <p maxlength="1"type="norm"id="g64" class="griditem" pr="0" grid="64"></p>
    <p maxlength="1"type="norm"id="g74" class="griditem" pr="0" grid="74"></p>
        
    <p maxlength="1"type="norm"id="g15" class="griditem" pr="0" grid="15"></p>
    <p maxlength="1"type="norm"id="g25" class="griditem" pr="0" grid="25"></p>
    <p maxlength="1"type="norm"id="g35" class="griditem" pr="0" grid="35"></p>
    <p maxlength="1"type="norm"id="g45" class="griditem" pr="0" grid="45"></p>
    <p maxlength="1"type="norm"id="g55" class="griditem" pr="0" grid="55"></p>
    <p maxlength="1"type="norm"id="g65" class="griditem" pr="0" grid="65"></p>
    <p maxlength="1"type="norm"id="g75" class="griditem" pr="0" grid="75"></p>

    <p maxlength="1"type="hide"id="g16" class="griditem" pr="0" grid="16"></p>     
    <p maxlength="1"type="norm"id="g26" class="griditem" pr="0" grid="26"></p>
    <p maxlength="1"type="norm"id="g36" class="griditem" pr="0" grid="36"></p>
    <p maxlength="1"type="norm"id="g46" class="griditem" pr="0" grid="46"></p>
    <p maxlength="1"type="norm"id="g56" class="griditem" pr="0" grid="56"></p>
    <p maxlength="1"type="norm"id="g66" class="griditem" pr="0" grid="66"></p>
    <p maxlength="1"type="hide"id="g76" class="griditem" pr="0" grid="76"></p>
        
    <p maxlength="1"type="hide"id="g17" class="griditem" pr="0" grid="17"></p>
    <p maxlength="1"type="hide"id="g27" class="griditem" pr="0" grid="27"></p>
    <p maxlength="1"type="norm"id="g37" class="griditem" pr="0" grid="37"></p>
    <p maxlength="1"type="norm"id="g47" class="griditem" pr="0" grid="47"></p>
    <p maxlength="1"type="norm"id="g57" class="griditem" pr="0" grid="57"></p>
    <p maxlength="1"type="hide"id="g67" class="griditem" pr="0" grid="67"></p>
    <p maxlength="1"type="hide"id="g77" class="griditem" pr="0" grid="77"></p>
`;
  


//Golem
grids['Golem'] = new Object();
grids['Golem']['rows'] = 7;
grids['Golem']['cols'] = 7;
grids['Golem']['html'] = `
    <p maxlength="1"type="norm"id="g11" class="griditem" pr="0" grid="11"></p>
    <p maxlength="1"type="norm"id="g21" class="griditem" pr="0" grid="21"></p>
    <p maxlength="1"type="norm"id="g31" class="griditem" pr="0" grid="31"></p>
    <p maxlength="1"type="hide"id="g41" class="griditem" pr="0" grid="41"></p>
    <p maxlength="1"type="norm"id="g51" class="griditem" pr="0" grid="51"></p>
    <p maxlength="1"type="norm"id="g61" class="griditem" pr="0" grid="61"></p>
    <p maxlength="1"type="norm"id="g71" class="griditem" pr="0" grid="71"></p>

    <p maxlength="1"type="norm"id="g12" class="griditem" pr="0" grid="12"></p>
    <p maxlength="1"type="norm"id="g22" class="griditem" pr="0" grid="22"></p>
    <p maxlength="1"type="norm"id="g32" class="griditem" pr="0" grid="32"></p>
    <p maxlength="1"type="hide"id="g42" class="griditem" pr="0" grid="42"></p>
    <p maxlength="1"type="norm"id="g52" class="griditem" pr="0" grid="52"></p>
    <p maxlength="1"type="norm"id="g62" class="griditem" pr="0" grid="62"></p>
    <p maxlength="1"type="norm"id="g72" class="griditem" pr="0" grid="72"></p>
        
    <p maxlength="1"type="norm"id="g13" class="griditem" pr="0" grid="13"></p>
    <p maxlength="1"type="norm"id="g23" class="griditem" pr="0" grid="23"></p>
    <p maxlength="1"type="norm"id="g33" class="griditem" pr="0" grid="33"></p>
    <p maxlength="1"type="norm"id="g43" class="griditem" pr="0" grid="43"></p>
    <p maxlength="1"type="norm"id="g53" class="griditem" pr="0" grid="53"></p>
    <p maxlength="1"type="norm"id="g63" class="griditem" pr="0" grid="63"></p>
    <p maxlength="1"type="norm"id="g73" class="griditem" pr="0" grid="73"></p>
        
    <p maxlength="1"type="hide"id="g14" class="griditem" pr="0" grid="14"></p>
    <p maxlength="1"type="hide"id="g24" class="griditem" pr="0" grid="24"></p>
    <p maxlength="1"type="norm"id="g34" class="griditem" pr="0" grid="34"></p>
    <p maxlength="1"type="norm"id="g44" class="griditem" pr="0" grid="44"></p>
    <p maxlength="1"type="norm"id="g54" class="griditem" pr="0" grid="54"></p>
    <p maxlength="1"type="hide"id="g64" class="griditem" pr="0" grid="64"></p>
    <p maxlength="1"type="hide"id="g74" class="griditem" pr="0" grid="74"></p>
        
    <p maxlength="1"type="norm"id="g15" class="griditem" pr="0" grid="15"></p>
    <p maxlength="1"type="norm"id="g25" class="griditem" pr="0" grid="25"></p>
    <p maxlength="1"type="norm"id="g35" class="griditem" pr="0" grid="35"></p>
    <p maxlength="1"type="norm"id="g45" class="griditem" pr="0" grid="45"></p>
    <p maxlength="1"type="norm"id="g55" class="griditem" pr="0" grid="55"></p>
    <p maxlength="1"type="norm"id="g65" class="griditem" pr="0" grid="65"></p>
    <p maxlength="1"type="norm"id="g75" class="griditem" pr="0" grid="75"></p>

    <p maxlength="1"type="norm"id="g16" class="griditem" pr="0" grid="16"></p>     
    <p maxlength="1"type="norm"id="g26" class="griditem" pr="0" grid="26"></p>
    <p maxlength="1"type="norm"id="g36" class="griditem" pr="0" grid="36"></p>
    <p maxlength="1"type="hide"id="g46" class="griditem" pr="0" grid="46"></p>
    <p maxlength="1"type="norm"id="g56" class="griditem" pr="0" grid="56"></p>
    <p maxlength="1"type="norm"id="g66" class="griditem" pr="0" grid="66"></p>
    <p maxlength="1"type="norm"id="g76" class="griditem" pr="0" grid="76"></p>
        
    <p maxlength="1"type="norm"id="g17" class="griditem" pr="0" grid="17"></p>
    <p maxlength="1"type="norm"id="g27" class="griditem" pr="0" grid="27"></p>
    <p maxlength="1"type="norm"id="g37" class="griditem" pr="0" grid="37"></p>
    <p maxlength="1"type="hide"id="g47" class="griditem" pr="0" grid="47"></p>
    <p maxlength="1"type="norm"id="g57" class="griditem" pr="0" grid="57"></p>
    <p maxlength="1"type="norm"id="g67" class="griditem" pr="0" grid="67"></p>
    <p maxlength="1"type="norm"id="g77" class="griditem" pr="0" grid="77"></p>
`;
  