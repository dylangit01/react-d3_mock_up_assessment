import React, { useEffect, useRef } from 'react'
import {select, arc, pie} from 'd3'
import useStyles from './GaugeChart-styles'


// !! Not using this component as no idea how to style all SVG gauge charts in proper way ..lol...


// const GaugeChart = ({chartData, title, index}) => {
//   const classes = useStyles()
//   const svgRef = useRef()
//   const data = [1-chartData?.score/100, chartData?.score/100]
//
//   useEffect(()=> {
//     const svg = select(svgRef.current)
//
//     const arcGen = arc()
//       .innerRadius(50)
//       .outerRadius(56)
//
//     const pieGen = pie()
//     const instructions = pieGen(data)
//     console.log(instructions)
//
//     svg.selectAll('.arc')
//       .data(instructions)
//       .join('path')
//       .attr('class', 'arc')
//       .attr('fill', (ins, index) => index === 1 ? '#0071C5' : '#eee')
//       .style('transform', "translate('75px', '100px')")
//       .attr('d', ins=> arcGen(ins))
//
//   },[data])
//
//   return (
//     <div className={ classes.root }>
//       <svg width='150' height='100' className={ classes.svg } ref={ svgRef }>
//
//       </svg>
//     </div>
//   )
// }
//
// export default GaugeChart
