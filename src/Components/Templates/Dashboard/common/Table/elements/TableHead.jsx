import React from 'react'

const TableHead = ({children}) => {
  return (
    <div className='*:h-8! *:px-3 border-b border-zinc-200 dark:border-dark-border rounded-t-xl **:text-xs! font-medium *:max-h-14!'>
        {children}
    </div>
  )
}

export default TableHead