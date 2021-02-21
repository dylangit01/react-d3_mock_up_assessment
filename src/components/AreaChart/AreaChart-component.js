import React, { useRef, useEffect } from 'react'
import useStyles from './AreaChart-styles'
import { select, line, axisBottom, curveCardinal, scaleLinear, axisRight } from 'd3'


const AreaChart = ({ areaData }) => {
  const classes = useStyles()


  // console.log(Object.keys(areaData))  //==> keys of this obj
  const objKey = Object.keys(areaData).map(k => k)

  const { Basics, QualityScore, Interaction, Expertise, Process } = areaData

  let xData = QualityScore.map(value => value.date)
  let yData = QualityScore.map(value => value.score)

  console.log(xData, yData)
  // x=date
  // y=score

  const svgRef = useRef()

  useEffect(() => {
    const svg = select(svgRef.current)
    const xScale = scaleLinear().domain([0, xData.length-1]).range([0, 450])
    const yScale = scaleLinear().domain([0, 100]).range([150, 0])


    const xAxis = axisBottom(xScale).ticks(xData.length).tickFormat((d, i) => ['Apr','May','Jun','Jul'][i] )
    svg.select('.x-axis').style('transform', 'translateY(150px').call(xAxis)
    xAxis(svg.select('.x-axis'))

    const yAxis = axisRight(yScale).ticks(yData.length)
    svg.select('.y-axis').style('transform', 'translateX(450px').call(yAxis)

    const myLine = line()
      .x((value, index) => xScale(index))
      .y(yScale)
      .curve(curveCardinal)

    svg.selectAll('.line')
      .data([yData])
      .join('path')
      .attr('class', 'line')
      .attr('d', myLine)
      .attr('fill', 'none')
      .attr('stroke', '#0071C5')
  }, [yData])

  return (
    <>
      <svg className={ classes.svg } ref={ svgRef }>
        <g className='x-axis' />
        <g className='y-axis' />
      </svg>
    </>
  )


}

export default AreaChart
