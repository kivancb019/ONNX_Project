async function runExample() {

  var x = new Float32Array( 1, 36 )

  var x = [];

   x[0] = document.getElementById('box1').value;
   x[1] = document.getElementById('box2').value;
   x[2] = document.getElementById('box3').value;
   x[3] = document.getElementById('box4').value;
   x[4] = document.getElementById('box5').value;
   x[5] = document.getElementById('box6').value;
   x[6] = document.getElementById('box7').value;
   x[7] = document.getElementById('box8').value;
   x[8] = document.getElementById('box9').value;
   x[9] = document.getElementById('box10').value;
   x[10] = document.getElementById('box11').value;
   x[11] = document.getElementById('box12').value;
   x[12] = document.getElementById('box13').value;
   x[13] = document.getElementById('box14').value;
   x[14] = document.getElementById('box15').value;
   x[15] = document.getElementById('box16').value;
   x[16] = document.getElementById('box17').value;
   x[17] = document.getElementById('box18').value;
   x[18] = document.getElementById('box19').value;
   x[19] = document.getElementById('box20').value;
   x[20] = document.getElementById('box21').value;
   x[21] = document.getElementById('box22').value;
   x[22] = document.getElementById('box23').value;
   x[23] = document.getElementById('box24').value;
   x[24] = document.getElementById('box25').value;
   x[25] = document.getElementById('box26').value;
   x[26] = document.getElementById('box27').value;
   x[27] = document.getElementById('box28').value;
   x[28] = document.getElementById('box29').value;
   x[29] = document.getElementById('box30').value;
   x[30] = document.getElementById('box31').value;
   x[31] = document.getElementById('box32').value;
   x[32] = document.getElementById('box33').value;
   x[33] = document.getElementById('box34').value;
   x[34] = document.getElementById('box35').value;
   x[35] = document.getElementById('box36').value;


  let tensorX = new ort.Tensor('float32', x, [1, 36] );
  let feeds = {float_input: tensorX};

  let session = await ort.InferenceSession.create('Student_Dropout.onnx');
  
 let result = await session.run(feeds);
 let outputData = result.variable.data;

outputData = parseFloat(outputData).toFixed(2)

 let predictions = document.getElementById('predictions');

predictions.innerHTML = ` <hr> Got an output tensor with values: <br/>
 <table>
   <tr>
     <td>  Rate of Student Dropout </td>
     <td id="td0">  ${outputData}  </td>
   </tr>
</table>`;
  

}