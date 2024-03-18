import Link from 'next/link'

export default function ArrowButton() {
  return (
    <Link href='/shop' aria-label="Link to shop page">
        <button className='inline-flex transition-all font-bold text-left items-center cursor-pointer hover:translate-x-4 translate-x-0 mt-8 md:mt-0'>
        <span className='mr-8'>More Projects</span>
            <div className=' inline-flex relative p-1 flex-none items-center justify-center w-14 h-14'>
                <div className='absolute'>
                    <svg width="60" height="60">
                        <circle
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="transparent"
                        r="28"
                        cx="30"
                        cy="30"
                        ></circle>
                        <circle
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="transparent"
                        r="28"
                        cx="30"
                        cy="30"
                        strokeDashoffset="175.92918860102841"
                        ></circle>
                    </svg>
                </div>
            <span className=' transform-none m-0'>
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=' transform -rotate-90'
            >
                <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z"
                fill="currentColor"
                ></path>
            </svg>
            </span>
        </div>
        </button>
    </Link>
  )
}
/*

 <StyledOuterWrapper href={to} aria-label="Link to experience page">
      <span>More Projects</span>
      <StyledWrapper>
        <div>
          <svg width="60" height="60">
            <circle
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              r="28"
              cx="30"
              cy="30"
            ></circle>
            <circle
              stroke="currentColor"
              strokeWidth="2"
              fill="transparent"
              r="28"
              cx="30"
              cy="30"
              transform-origin="30px 30px"
              strokeDashoffset="175.92918860102841"
            ></circle>
          </svg>
        </div>
        <span>
          <StyledArrow
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z"
              fill="currentColor"
            ></path>
          </StyledArrow>
        </span>
      </StyledWrapper>
    </StyledOuterWrapper>

*/
