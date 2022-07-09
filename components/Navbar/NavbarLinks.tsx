const NavbarLinks = () => {
  return (
    <>
      <li tabIndex={0}>
        <a className="justify-between">
          Trade
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li>
            <a>Swap</a>
          </li>
          <li>
            <a>Convert</a>
          </li>
          <li>
            <a>Split</a>
          </li>
        </ul>
      </li>
      <li tabIndex={1}>
        <a className="justify-between">
          Earn
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li>
            <a>Pools</a>
          </li>
          <li>
            <a>Staking</a>
          </li>
        </ul>
      </li>
      <li tabIndex={2}>
        <a className="justify-between">
          Faucet
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li>
            <a>Tokens</a>
          </li>
          <li>
            <a>Tron</a>
          </li>
        </ul>
      </li>
      <li tabIndex={3}>
        <a className="justify-between">
          Quest
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li>
            <a>Claim</a>
          </li>
          <li>
            <a>List</a>
          </li>
        </ul>
      </li>
      <li tabIndex={4}>
        <a className="justify-between">
          Governance
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
          </svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a>Vote</a>
          </li>
        </ul>
      </li>
      <li>
        <a>Wiki</a>
      </li>
      <li>
        <a>Game</a>
      </li>
    </>
  )
}

export default NavbarLinks
