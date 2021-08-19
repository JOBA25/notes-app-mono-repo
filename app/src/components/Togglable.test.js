import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { fireEvent } from '@testing-library/dom'
import Togglable from './Togglable'

describe('<Togglable />', () => {
  const buttonLabel = 'show'
  let component

  beforeEach(() => {
    component = render(
      <Togglable buttonLabel={buttonLabel}>
        <div className='test'>TestDiv</div>
      </Togglable>
    )
  })

  test('renders its children', () => {
    component.getByText('TestDiv')
  })

  test('renders its children but they are not visible', () => {
    const el = component.getByText('TestDiv')
    expect(el.parentNode).toHaveStyle('display:none')
  })

  test('after clicking its children must be shown', () => {
    const button = component.getByText(buttonLabel)
    fireEvent.click(button)

    const el = component.getByText('TestDiv')
    expect(el.parentNode).not.toHaveStyle('display:none')
  })

  /* test('toggled content can be closed', () => {
    cosnt cancelButton = component.getByText('')
  })
  */
})
