import LowerCard from '../LowerCard';
import style from "./LecturesCardLower.module.css"; 
import { FaEllipsisV } from "react-icons/fa";
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
function LecturesCardLower (){
    const data = ['']
    return (
        <LowerCard
        title={'Lectures Lower'}
        options={<FaEllipsisV/>}
        body={
            <div className={style.adminAvailableClassRoomsContainer}>
        <div className={style.adminAvailableClassRoomsFloor}>
            <dev className={style.adminAvailableClassRoomsRoom}><p>101</p><p>Dr.Ahmed albarakait</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>102</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>103</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>104</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>105</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>106</p></dev>
            <dev style={{
              borderRadius: '1rem',
              backgroundColor:'#ff726f',
              border: '1px solid gray',
              width: '5rem',
              height: '5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              }}><p>107</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>108</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>109</p></dev>
            <dev style={{
              borderRadius: '1rem',
              backgroundColor:'#ff726f',
              border: '1px solid gray',
              width: '5rem',
              height: '5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              }}><p>110</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>111</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>112</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>113</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>114</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>115</p></dev>
            <dev style={{
              borderRadius: '1rem',
              backgroundColor:'#ff726f',
              border: '1px solid gray',
              width: '5rem',
              height: '5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              }}><p>116</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>117</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>118</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>119</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>120</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>121</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>122</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>123</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>124</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>125</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>126</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>127</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>128</p></dev>
        </div>
        <div className={style.adminAvailableClassRoomsFloor}>
            <dev className={style.adminAvailableClassRoomsRoom}><p>201</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>202</p></dev>
            <dev style={{
              borderRadius: '1rem',
              backgroundColor:'#ff726f',
              border: '1px solid gray',
              width: '5rem',
              height: '5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              }}><p>203</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>204</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>205</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>206</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>207</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>208</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>209</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>210</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>211</p></dev>
            <dev style={{
              borderRadius: '1rem',
              backgroundColor:'#ff726f',
              border: '1px solid gray',
              width: '5rem',
              height: '5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              }}><p>201</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>213</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>214</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>215</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>216</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>217</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>218</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>219</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>220</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>221</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>222</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>223</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>224</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>225</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>226</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>227</p></dev>
            <dev className={style.adminAvailableClassRoomsRoom}><p>228</p></dev>
        </div>
        <div className={style.adminAvailableClassRoomsChart}>

          
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>



        </div>
      </div>
        
        }
        />
    )
}
export default LecturesCardLower;