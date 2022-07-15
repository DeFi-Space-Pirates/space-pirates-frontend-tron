type LoadingButtonProps = {
  text: string
  loading: boolean
  onClick: () => void
}

const LoadingButton = ({ text, loading, onClick }: LoadingButtonProps) => {
  return (
    <button
      className={`btn bg-primary btn-block hover:bg-primary-focus border-0 drop-shadow-md ${
        loading && 'loading'
      }`}
      onClick={() => onClick()}
    >
      {text}
    </button>
  )
}

export default LoadingButton
