import React from 'react'

const TableToolbar = ({children,  useFlexBetween}) => {
  return (
    <div className={`${useFlexBetween ? 'flex items-center justify-between flex-wrap max-[432px]:justify-center' : null} gap-3 min-h-16 px-10! border-b dark:border-dark-border border-zinc-200`}>
      {children}
    </div>
  )
}

export default TableToolbar