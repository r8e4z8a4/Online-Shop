import React from 'react'

const Table = ({children}) => {
  return (
    <div className='primary-border dark:border-dark-border border-2 bg-white dark:bg-dark-bg2/50 *:p-2 rounded-xl'>
      {children}
    </div>
  )
}

export default Table