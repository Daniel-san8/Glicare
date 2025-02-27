import ISvg from "@/app/models/svg.interface";

export default function IconPhone({ className }: ISvg) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className={className}>
        <path d="M28.25 30C24.7778 30 21.3472 29.2433 17.9583 27.73C14.5694 26.2167 11.4861 24.0706 8.70833 21.2917C5.93056 18.5128 3.785 15.4294 2.27167 12.0417C0.758333 8.65389 0.00111111 5.22333 0 1.75C0 1.25 0.166667 0.833333 0.5 0.5C0.833333 0.166667 1.25 0 1.75 0H8.5C8.88889 0 9.23611 0.132222 9.54167 0.396667C9.84722 0.661111 10.0278 0.973333 10.0833 1.33333L11.1667 7.16667C11.2222 7.61111 11.2083 7.98611 11.125 8.29167C11.0417 8.59722 10.8889 8.86111 10.6667 9.08333L6.625 13.1667C7.18056 14.1944 7.84 15.1872 8.60333 16.145C9.36667 17.1028 10.2072 18.0267 11.125 18.9167C11.9861 19.7778 12.8889 20.5767 13.8333 21.3133C14.7778 22.05 15.7778 22.7233 16.8333 23.3333L20.75 19.4167C21 19.1667 21.3267 18.9794 21.73 18.855C22.1333 18.7306 22.5289 18.6956 22.9167 18.75L28.6667 19.9167C29.0556 20.0278 29.375 20.2294 29.625 20.5217C29.875 20.8139 30 21.14 30 21.5V28.25C30 28.75 29.8333 29.1667 29.5 29.5C29.1667 29.8333 28.75 30 28.25 30Z" fill="#1C1C1C"/>
      </svg>
    );
  }