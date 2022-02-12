import React, { useEffect } from 'react';
import './index.css';
import './App.css';
import NavBar from "./NavBar";
import Main from "./Main";

function App() {
  useEffect(() => {
    document.title = "kingpin"
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Main />
      <br></br>
      <p> disclaimer: in progress project - currently shown images will be 
        replaced by original illustrations. until then, image credits 
        to original artists </p>
    </div>
  );
}

export default App;
/*

// The main component
function App() {

  //-------------------------- KORANIN --------------------------
  const [pageName, setPageName] = useState("koranin");

  function toSectors() {
    setPageName("sectors");
  }

  function toAlcerium() {
    setPageName("alcerium");
  }

  function toCastorix() {
    setPageName("castorix");
  }

  function toLyrisius() {
    setPageName("lyrisius");
  }

  function toLysande() {
    setPageName("lysande");
  }

  //-------------------------- KINGPIN --------------------------
  function toKingpin() {
    setPageName("kingpin");
  }

  function toBrighte() {
    setPageName("brighte");
  }

  function toLaleh() {
    setPageName("laleh");
  }

  function toLydi() {
    setPageName("lydi");
  }

  function toNakoa() {
    setPageName("nakoa");
  }

  function toRin() {
    setPageName("rin");
  }

  function toRobyn() {
    setPageName("robyn");
  }

  function toSumina() {
    setPageName("sumina");
  }

  //-------------------------- PAGES --------------------------
  if (pageName == "koranin") {
    return (
      <div id="splashContents">
        <img id="home_img" src="./img/splash.png"/>
        <p id="introText">WHAT DOES IT MEAN TO YOU?</p>
        <div id="line"></div>
        <img id="button_icon" src="./img/button_icon.png" onClick={toSelection}></img>
        <p id="introText" onClick={toSelection}>GET STARTED</p>
      </div>
    )
  } 
  else if (pageName == "Selection_Page") {
    return (
      <div>
        <div id="border1"></div>
        <p id="statementText">UC TUITION IS GROWING TOO FAST, BUT COMPARED TO WHAT?</p>
        <div id="border2"></div>
        <p id="selectText">CLICK A COMPARISON ICON TO VIEW:</p>
        <div id="medIncome">
          <img id="icon" src="./img/medIncome_icon.png" onClick={toMedIncome}></img>
          <p id="optionText" onClick={toMedIncome}>MEDIAN US HOUSEHOLD INCOME</p>
        </div>
        <div id="minWage">
          <img id="icon" src="./img/minWage_icon.png" onClick={toMinWage}></img>
          <p id="optionText" onClick={toMinWage}>CA STATE MINIMUM WAGE</p>
        </div>
        <div id="SPI">
          <img id="icon" src="./img/spi_icon.png" onClick={toSPI}></img>
          <p id="optionText" onClick={toSPI}>STANDARD & POOR'S (S&P) 500 INDEX</p>
        </div>
        <div id="CPI">
          <img id="icon" src="./img/cpi_icon.png" onClick={toCPI}></img>
          <p id="optionText" onClick={toCPI}>CONSUMER PRICE INDEX</p>
        </div>
      </div>
    )
  } 
  else if (pageName == "medIncome_LMPage"){
    return (
      <div>
        <div id="backContainer">
          <button id="back_button" onClick={toMedIncome}></button>
          <p id="back" onClick={toMedIncome}>BACK</p>
        </div>
        <div id="lineTop"></div>
        <h1 id="headers">COMPARING: MEDIAN US HOUSEHOLD INCOME</h1>
        <img id="iconLM" src="./img/medIncome_icon.png"></img>
        <p id="filler">WHY IS THIS MEANINGFUL?</p>
        <p id="description">Exactly half of all households bring in less than the median income, and half bring in more.  This makes it a good measure of what "most people" earn. The US Census Bureau does annual surveys to collect household income data. Comparing tuition to median household income shows how the ability of family to pay for college out of pocket has decreased over time; what used to be a manageable expense has grown to consume 1/4 of the family budget.</p>
      </div>
    )
  }
  else if (pageName == "minWage_LMPage") {
    return (
      <div>
        <div id="backContainer">
          <button id="back_button" onClick={toMinWage}></button>
          <p id="back" onClick={toMinWage}>BACK</p>
        </div>
        <div id="lineTop"></div>
        <h1 id="headers">COMPARING: CA STATE MINIMUM WAGE</h1>
        <img id="iconLM" src="./img/minWage_icon.png"></img>
        <p id="filler">WHY IS THIS MEANINGFUL?</p>
        <p id="description">This is the minimum hourly wage in California.  Within this time period, it has grown more slowly than the cost of living, eroding the ability of minimum wage workers to support their families. Students of an earlier generation were able to "work their way through school", but given the huge disparity now between the cost of college and the income from a low-wage job, this is impossible for today's students.</p>
      </div>
    )
  }
  else if (pageName == "SPI_LMPage") {
    return (
      <div>
        <div id="backContainer">
          <button id="back_button" onClick={toSPI}></button>
          <p id="back" onClick={toSPI}>BACK</p>
        </div>
        <div id="lineTop"></div>
        <h1 id="headers">COMPARING: S&P 500 INDEX</h1>
        <img id="iconLM" src="./img/spi_icon.png"></img>
        <p id="filler">WHY IS THIS MEANINGFUL?</p>
        <p id="description">Standard & Poor's S&P 500 Index is a common benchmark for how investments grow over time.  It is a weighted average of the prices of 500 of the largest companies listed on stock exchanges in the United States; over the years new companies join the S&P as they grow, while others are dropped. For a family saving for college, comparing tuition to the S&P 500 is discouraging; investing 2021 tuition for a baby born this year will likely not yield enough to cover 2059 tuition when the child turns 18 (if trends continue).</p>
      </div>
    )
  }
  else if (pageName == "CPI_LMPage") {
    return (
      <div>
        <div id="backContainer">
          <button id="back_button" onClick={toCPI}></button>
          <p id="back" onClick={toCPI}>BACK</p>
        </div>
        <div id="lineTop"></div>
        <h1 id="headers">COMPARING: CONSUMER PRICE INDEX</h1>
        <img id="iconLM" src="./img/cpi_icon.png"></img>
        <p id="filler">WHY IS THIS MEANINGFUL?</p>
        <p id="description">The Consumer Price Index (CPI) is a benchmark definition of the cost of living, computed by the US Bureau of Labor Statistics. It is based on the prices paid by urban consumers for a "market basket" of consumer goods and services, including education, housing, and medical care as well as more typical goods such as food, recreation, and transportation. Comparing tuition to CPI shows how much faster higher education prices rise compared to prices overall.</p>
      </div>
    )
  }
  else return (
    <div>
      <Graph />
    </div>
  )

  //------------------------ GRAPH FUNCTION ------------------------
  function Graph() {
    // Set a variable to store the data read from csv file
    const [dataArray, setData] = useState(null);
    // 
    const [comparison, setComparison] = useState(null);
    //updating between resident and non-resident text in graph key
    const [text, setText] = useState(null);

    // Set clicking events for buttons
    const tuition = () => {
      setComparison("tuition");
      setText("RESIDENT TUITION");
    }

    const nonResidentialTuition = () => {
      setComparison("nonResidentialTuition");
      setText("NON-RESIDENT TUITION");
    }
    
    const medianIncome = () => {
      console.log("median income");
      setComparison("medianIncome");
    }

    const minWage = () => {
      console.log("minimum wage");
      setComparison("minWage");
    }

    const spi = () => {
      console.log("spi");
      setComparison("spi");
    }

    const cpi = () => {
      console.log("cpi");
      setComparison("cpi");
    }

    // setComparison(null)
    // don't go into infinite loop by setting state every time! 
    if (dataArray == null) {
      console.log("reading csv file");
      d3.csv("./src/tuition.csv").then
      // convert data to usable form
      (function(data) {
        data.forEach(function(d) {
          d.cpi = d['Consumer Price Index']
          d.cpi = Number(d.cpi);
          d.spi = d['S&P 500 Index']
          d.spi = Number(d.spi.replace(/\,/g, ''));
          d.medianIncome = d['US Median Household income']
          d.medianIncome = Number(d.medianIncome.replace(/\,/g, ''));
          d.nonResidentialTuition = d['Non-resident tutition and fees']
          d.nonResidentialTuition = Number(d.nonResidentialTuition.replace(/\,/g, ''));
          d.minWage = d['Minimum Wage']
          d.minWage = Number(d.minWage)
          d.tuition = d["Resident tuition and fees"];
          d.tuition = Number(d.tuition.replace(/\,/g, ''));
          d.year = d["Year"].split("-")[0];

        });
        // store in state variable and trigger an update

        setData(data);
      });
      setData("loading");
    }

    //--------------------- MEDIAN INCOME ----------------------
    if (pageName == "medIncome_Page") {
      if ((dataArray != null) && (dataArray != "loading")) {
        console.log("update from App");
        return (
          <div>
            <div id="backContainer">
              <button id="back_button" onClick={toSelection}></button>
              <p id="back" onClick={toSelection}>BACK</p>
            </div>
            <div id="lineTop"></div>
            <p id="graphTitle">MEDIAN US HOUSEHOLD INCOME</p>
            <div>
              <button id = "residentButton" onClick = {tuition}>RESIDENT TUITION</button>
              <button id = "nonresidentButton" onClick = {nonResidentialTuition}>NON-RESIDENT TUITION</button>
            </div>
            <div id = "graph">
              <MedIncomeGraph data={dataArray} comparison={comparison} width={242} />
            </div>
            <div id="key">
              <div id="label1">
                <p id="keyText"><span>MEDIAN INCOME</span></p>
              </div>
              <div id="label2">
                <p id="residentText"><span>{text}</span></p>
              </div>
            </div>
            <div id="bottom">
              <div id="lineBottom"></div>
              <img id="buttonLM_icon" src="./img/button_icon.png" onClick = {toMedIncomeLM}></img>
              <p id = "learnMore" onClick = {toMedIncomeLM}>LEARN MORE</p>
            </div>
          </div>
        )
      } 
      else {
        return (
          <div>
            <p id="loadText">Loading...</p>
          </div>
        )
      }
    } 

    //------------------------ MIN WAGE ------------------------
    if (pageName == "minWage_Page") {
      if ((dataArray != null) && (dataArray != "loading")) {
        console.log("update from App");
        return (
          <div>
            <div id="backContainer">
              <button id="back_button" onClick={toSelection}></button>
              <p id="back" onClick={toSelection}>BACK</p>
            </div>
            <div id="lineTop"></div>
            <p id="graphTitle">CA STATE MINIMUM WAGE</p>
            <div>
              <button id = "residentButton" onClick = {tuition}>RESIDENT TUITION</button>
              <button id = "nonresidentButton" onClick = {nonResidentialTuition}>NON-RESIDENT TUITION</button>
            </div>
            <div id = "graph">
              <MinWageGraph data={dataArray} comparison={comparison} width={242} />
            </div>
            <div id="key">
              <div id="label1">
                <p id="keyText"><span>MINIMUM WAGE</span></p>
              </div>
              <div id="label2">
                <p id="residentText"><span>{text}</span></p>
              </div>
            </div>
            <div id="bottom">
              <div id="lineBottom"></div>
              <img id="buttonLM_icon" src="./img/button_icon.png" onClick = {toMinWageLM}></img>
              <p id = "learnMore" onClick = {toMinWageLM}>LEARN MORE</p>
            </div>
          </div>
        )
      } 
      else {
        return (
          <div>
            <p id="loadText">Loading...</p>
          </div>
        )
      }
    }

    //---------------------- S&P 500 INDEX ----------------------
    if (pageName == "SPI_Page") {
      if ((dataArray != null) && (dataArray != "loading")) {
        console.log("update from App");
        return (
          <div>
            <div id="backContainer">
              <button id="back_button" onClick={toSelection}></button>
              <p id="back" onClick={toSelection}>BACK</p>
            </div>
            <div id="lineTop"></div>
            <p id="graphTitle">S&P 500 INDEX</p>
            <div>
              <button id = "residentButton" onClick = {tuition}>RESIDENT TUITION</button>
              <button id = "nonresidentButton" onClick = {nonResidentialTuition}>NON-RESIDENT TUITION</button>
            </div>
            <div id = "graph">
              <SPIndexGraph data={dataArray} comparison={comparison} width={242} />
            </div>
            <div id="key">
              <div id="label1">
                <p id="keyText"><span>S&P 500 INDEX</span></p>
              </div>
              <div id="label2">
                <p id="residentText"><span>{text}</span></p>
              </div>
            </div>
            <div id="bottom">
              <div id="lineBottom"></div>
              <img id="buttonLM_icon" src="./img/button_icon.png" onClick = {toSPI_LM}></img>
              <p id = "learnMore" onClick = {toSPI_LM}>LEARN MORE</p>
            </div>
          </div>
        )
      } 
      else {
        return (
          <div>
            <p id="loadText">Loading...</p>
          </div>
        )
      }
    }

    //------------------ CONSUMER PRICE INDEX ------------------
    if (pageName == "CPI_Page") {
      if ((dataArray != null) && (dataArray != "loading")) {
        console.log("update from App");
        return (
          <div>
            <div id="backContainer">
              <button id="back_button" onClick={toSelection}></button>
              <p id="back" onClick={toSelection}>BACK</p>
            </div>
            <div id="lineTop"></div>
            <p id="graphTitle">CONSUMER PRICE INDEX</p>
            <div>
              <button id = "residentButton" onClick = {tuition}>RESIDENT TUITION</button>
              <button id = "nonresidentButton" onClick = {nonResidentialTuition}>NON-RESIDENT TUITION</button>
            </div>
            <div id = "graph">
              <CPIndexGraph data={dataArray} comparison={comparison} width={242} />
            </div>
            <div id="key">
              <div id="label1">
                <p id="keyText"><span>CONSUMER PRICE INDEX</span></p>
              </div>
              <div id="label2">
                <p id="residentText"><span>{text}</span></p>
              </div>
            </div>
            <div id="bottom">
              <div id="lineBottom"></div>
              <img id="buttonLM_icon" src="./img/button_icon.png" onClick = {toCPI_LM}></img>
              <p id = "learnMore" onClick = {toCPI_LM}>LEARN MORE</p>
            </div>
          </div>
        )
      } 
      else {
        return (
          <div>
            <p id="loadText">Loading...</p>
          </div>
        )
      }
    }
  }

}

export default App;
*/