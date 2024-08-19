import { createGlobalStyle } from "styled-components";
import "swiper/swiper-bundle.css";

const GlobalStyles = createGlobalStyle`
:root {
  &, &.light-mode {
  /* Grey */
  --color-grey-0: #fff;
  --color-grey-100: #eceef0;
  --color-grey-200: #e9e9e9;
  --color-grey-300: #d4d6d8;
  --color-grey-400: #8e8f90;
  --color-grey-500: #252525;
  --color-grey-600: #0f0f0f;
  --color-grey-700: #000;

 /* Dashboard */
  --color-dashboard-0: #fff;
  --color-dashboard-50: #f9fafb;
  --color-dashboard-100: #f3f4f6;
  --color-dashboard-200: #e5e7eb;
  --color-dashboard-300: #d1d5db;
  --color-dashboard-400: #9ca3af;
  --color-dashboard-500: #6b7280;
  --color-dashboard-600: #4b5563;
  --color-dashboard-700: #374151;
  --color-dashboard-800: #1f2937;
  --color-dashboard-900: #111827;

  --color-green-0: #fff;
  --color-green-50: #f0f8f5;
  --color-green-100: #e4f2ed;
  --color-green-200: #a2d2c0;
  --color-green-300: #83c3ab;
  --color-green-400: #64b496;
  --color-green-500: #5aa287;
  --color-green-600: #509078;
  --color-green-700: #467e69;
  --color-green-800: #325a4b;
  --color-green-900: #1e362d;

  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;
  --color-green-100: #dcfce7;
  --color-green-700: #15803d;
  --color-yellow-100: #fef9c3;
  --color-yellow-700: #a16207;
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  

    --image-grayscale: 0;
  --image-opacity: 100%;
  }
  
  &.dark-mode {

    --color-grey-700: #fff;
    --color-grey-600: #eceef0;
  --color-grey-500: #e9e9e9;
  --color-grey-400: #d4d6d8;
  --color-grey-300: #8e8f90;
  --color-grey-200: #313a4b;
  --color-grey-100: #1c2236;
  --color-grey-0: #151a2b;

  /* Dashboard */
  --color-dashboard-0: #18212f;
--color-dashboard-50: #111827;
--color-dashboard-100: #1f2937;
--color-dashboard-200: #374151;
--color-dashboard-300: #4b5563;
--color-dashboard-400: #6b7280;
--color-dashboard-500: #9ca3af;
--color-dashboard-600: #d1d5db;
--color-dashboard-700: #e5e7eb;
--color-dashboard-800: #f3f4f6;
--color-dashboard-900: #f9fafb;

  --color-green-0: #fff;
  --color-green-50: #f0f8f5;
  --color-green-100: #e4f2ed;
  --color-green-200: #a2d2c0;
  --color-green-300: #83c3ab;
  --color-green-400: #64b496;
  --color-green-500: #5aa287;
  --color-green-600: #509078;
  --color-green-700: #467e69;
  --color-green-800: #325a4b;
  --color-green-900: #1e362d;


--color-blue-100: #075985;
--color-blue-700: #e0f2fe;
--color-green-100: #166534;
--color-green-700: #dcfce7;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700: #f3f4f6;
--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;
  }
  
  /* Indigo */
  --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;
  
  /* Application */
  --color-primary:  #252525;


  /*************** */
  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  /* Font family */
  --manrope-font: "Manrope", sans-serif;

}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: color 0.05s ease-in-out, background-color 0.3s ease-in-out, border 0.3s ease-in-out;
  /* transition: all 0.3s; */
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);
  letter-spacing: 0.03rem;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  transition: color 0.05s, background-color 0.3s;
  /* transition: all 0.3s ; */


}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

`;

export default GlobalStyles;
