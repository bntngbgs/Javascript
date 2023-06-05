const searchBtn = document.getElementById("search-country");
const countryContainer = document.getElementById("country-container");
const searchBar = document.getElementById("search-bar");

searchBtn.addEventListener("click", (e) => {
  if(e.target.classList[0] === "cta-button"){
  countryContainer.innerHTML = "";
  const continent = e.target.innerText;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://restcountries.com/v3.1/all`);

  xhr.onload = function () {
    if (this.status === 200) {
      let countries = JSON.parse(this.responseText);
      countries.forEach((country) => {
        if (country.continents[0] === continent) {
          const countryDiv = document.createElement("div");
          countryDiv.setAttribute("class", "cta");

          countryDiv.innerHTML = `<img src="${country.flags.png}" alt="${country.name.official}-flag">`;

          const textContent = document.createElement("div");
          textContent.setAttribute("class", "cta__text-column");
          textContent.innerHTML = `<h2>${country.name.common}</h2>
          <p>${country.subregion}</p>
          <button class="cta-button">View Details</button>`;

          countryContainer.append(countryDiv);
          countryDiv.append(textContent);
        }
      });
    }
  };
  xhr.send();
  }
});

countryContainer.addEventListener("click", (e) => {
  if (e.target.className === "cta-button") {
    countryContainer.innerHTML = "";
    let country =
      e.target.previousElementSibling.previousElementSibling.innerText.toLowerCase();

    const xhr = new XMLHttpRequest();

    xhr.open(
      "GET",
      `https://restcountries.com/v3.1/name/${country}?fullText=true`
    );

    xhr.onload = function () {
      if (this.status === 200) {
        let countryData = JSON.parse(this.responseText);

        let [country] = countryData;

        let {
          name: { common },
          capital,
          region,
          subregion,
          population,
          timezones,
          flags: { png, alt },
          currencies: { ...values },
        } = country;

        let currency = Object.values(values)[0].name;

        const countryDetails = document.createElement("div");
        countryDetails.setAttribute("class", "country-details");
        countryDetails.innerHTML = `<img src="${png}" alt="${alt}">
        <div class="details">
        <p><strong>Country Name :</strong> ${common}</p>
        <p><strong>Capital City :</strong> ${capital}</p>
        <p><strong>Region :</strong> ${region}</p>
        <p><strong>Sub-Region :</strong> ${subregion}</p>
        <p><strong>Population :</strong> ${population}</p>
        <p><strong>Currency :</strong> ${currency} </p>
        <p><strong>Timezones :</strong> ${timezones}</p>
        </div>`;

        countryContainer.append(countryDetails);
      }
    };

    xhr.send();
  }
});

searchBar.addEventListener("submit", (e) => {
  e.preventDefault();

  countryContainer.innerHTML = "";

  const inputValue = document.querySelector(".search-input");

  console.log(inputValue.value);
  const xhr = new XMLHttpRequest();

  xhr.open(
    "GET",
    `https://restcountries.com/v3.1/name/${inputValue.value}?full_text=true`
  );

  xhr.onload = function () {
    if (this.status === 200) {
      let [country] = JSON.parse(this.responseText);

      const countryDiv = document.createElement("div");
      countryDiv.setAttribute("class", "cta");
      console.log(country);
      countryDiv.innerHTML = `<img src="${country.flags.png}" alt="${country.name.official}-flag">`;

      const textContent = document.createElement("div");
      textContent.setAttribute("class", "cta__text-column");
      textContent.innerHTML = `<h2>${country.name.common}</h2>
        <p>${country.subregion}</p>
        <button class="cta-button">View Details</button>`;

      countryContainer.append(countryDiv);
      countryDiv.append(textContent);
    } else if (this.status === 404) {
      const errorParagraph = document.createElement("h1");
      errorParagraph.innerText = "Country Not Found...";

      countryContainer.append(errorParagraph);
    }
  };
  xhr.send();
});
