//Description:

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


function domainName(url) {
    if (url.substring(0, 7) === "http://") {
        url = url.slice(7);
    }
    if (url.substring(0, 8) === "https://") {
        url = url.slice(8);
    }
    if (url.substring(0, 4) === "www.") {
        url = url.slice(4);
    }

    return url.split('.')[0];
}