import style from './AvailableClassRooms.module.css'
import { FaEllipsisV } from "react-icons/fa";
import AvailableCard from './availableCard/AvailableCard';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

export const option ={
  aspectRatio: [2],
  plugins: {

    legend: {
      labels: {boxHeight: 50, boxWidth: 100, font :{size: 24, family: 'Poppins'}, borderRadius: 20 },


      position: 'right',

    },
    
    
    

}
}


export const data = {

  labels: ['Unavailable', 'Blue', 'Yellow'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        '#ff726f',
        '#83aef2',
        '#83f2d0',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
     
      ],
      borderWidth: 1,
      
      
    },
  ],
};


const AvailableClassRooms = () => {
  
  // const  imagess = createImage();
  return(
    <AvailableCard
    title={'Available Class Rooms'}
    options={<FaEllipsisV/>}
    body={
      <div className={style.availableClassRoomsContainer}>
        <div className={style.firstFloor}>
            <dev className={style.availableClassRoomsRoom}><p>101</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>102</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>103</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>104</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>105</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>106</p></dev>
            <dev style={{
              borderRadius: '1rem',
              backgroundColor:'#ff726f',
              border: '1px solid gray',
              width: '16%',
              height: '16%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              }}><p>107</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>108</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>109</p></dev>
            <dev style={{
              borderRadius: '1rem',
              backgroundColor:'#ff726f',
              border: '1px solid gray',
              width: '16%',
              height: '16%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              }}><p>110</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>111</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>112</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>113</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>114</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>115</p></dev>
            <dev style={{
              borderRadius: '1rem',
              backgroundColor:'#ff726f',
              border: '1px solid gray',
              width: '16%',
              height: '16%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              }}><p>116</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>117</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>118</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>119</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>120</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>121</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>122</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>123</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>124</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>125</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>126</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>127</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>128</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>127</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>128</p></dev>
        </div>
        <div className={style.secFloor}>
        <dev className={style.availableClassRoomsRoom}><p>201</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>202</p></dev>
            <dev style={{
              borderRadius: '1rem',
              backgroundColor:'#ff726f',
              border: '1px solid gray',
              width: '16%',
              height: '16%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              }}><p>203</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>204</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>205</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>206</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>207</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>208</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>209</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>210</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>211</p></dev>
            <dev style={{
              borderRadius: '1rem',
              backgroundColor:'#ff726f',
              border: '1px solid gray',
              width: '16%',
              height: '16%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              }}><p>201</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>213</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>214</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>215</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>216</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>217</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>218</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>219</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>220</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>221</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>222</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>223</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>224</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>225</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>226</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>227</p></dev>
            <dev className={style.availableClassRoomsRoom}><p>228</p></dev>
        </div>
        <div className={style.ChartPart}>
        <Doughnut data={data} className={style.dunot} options={option} />
        </div>

      </div>
     
      
    }
    />
  )
}
export default AvailableClassRooms;