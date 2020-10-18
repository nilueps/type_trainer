import React from 'react'
import { TypeTrainer } from '../TypeTrainer'
import { render } from '../../utils/test-utils'
import { MarkovTrainingStringGenerator } from '../../utils/TrainingStringGenerator/TrainingStringGenerator'
import { dict as english } from '../../assets/Dictionaries/english.json'

describe('Keyboard', () => {
  // eslint-disable-next-line jest/expect-expect
  it('renders without crashing', () => {
    render(<TypeTrainer generator={new MarkovTrainingStringGenerator(english)}></TypeTrainer>, {})
  })
})