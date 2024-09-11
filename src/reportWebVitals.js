// Define a function called 'reportWebVitals' that takes a callback function 'onPerfEntry' as an argument
const reportWebVitals = onPerfEntry => {
    // Check if 'onPerfEntry' is provided and is a function
    if (onPerfEntry && onPerfEntry instanceof Function) {
        // Dynamically import the 'web-vitals' library when it's needed
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            // Call the 'getCLS' function (Cumulative Layout Shift) with 'onPerfEntry' to measure the CLS
            getCLS(onPerfEntry);
            // Call the 'getFID' function (First Input Delay) with 'onPerfEntry' to measure the FID
            getFID(onPerfEntry);
            // Call the 'getFCP' function (First Contentful Paint) with 'onPerfEntry' to measure the FCP
            getFCP(onPerfEntry);
            // Call the 'getLCP' function (Largest Contentful Paint) with 'onPerfEntry' to measure the LCP
            getLCP(onPerfEntry);
            // Call the 'getTTFB' function (Time to First Byte) with 'onPerfEntry' to measure the TTFB
            getTTFB(onPerfEntry);
        });
    }
};

// Export the 'reportWebVitals' function as the default export of this module
export default reportWebVitals;
