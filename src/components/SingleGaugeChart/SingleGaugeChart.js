import React, { useEffect, useRef } from 'react'
import { select, arc, pie } from 'd3'
import useStyles from './SingleGaugeChart-styles'
import Button from '@material-ui/core/Button'

import { useDispatch } from 'react-redux'
import { getCurrentName } from '../../react-redux/Actions/chartActions'

const SingleChart = ({ gaugeData }) => {
  const classes = useStyles()

  const { name, score, sample, vsly } = gaugeData
  const svgRef = useRef()
  const data = [ 1 - score / 100, score / 100 ]

  const dispatch = useDispatch()

  useEffect(() => {
    const svg = select(svgRef.current)

    const arcGen = arc()
      .innerRadius(50)
      .outerRadius(56)

    const pieGen = pie()
    const instructions = pieGen(data)

    let g = svg.attr('height', 100)
      .append('g')
      .attr('transform', 'translate(' + 75 + ',' + 50 + ')');

    g.selectAll('.arc')
      .data(instructions)
      .join('path')
      .attr('class', 'arc')
      .attr('fill', (ins, index) => index === 1 ? '#0071C5' : '#eee')
      .attr('d', ins => arcGen(ins))

  }, [ data ])

  return (
    <>
      <Button onClick={ () => dispatch(getCurrentName(name)) } className={ classes.btn }>
        <div className={ classes.svgGrid }>
          <p className={ classes.itemColor }>{ name }</p>
          <p className={ classes.itemColor }>{ score } %</p>
          <svg width='150' height='250' className={ classes.svg } ref={ svgRef }>
          </svg>
          <p>Sample: { sample }</p>
        </div>
      </Button>
    </>
  )
}

export default SingleChart
