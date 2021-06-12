import React, { useEffect, useState } from 'react';
import '../css/companyDetail.css';
import {compData} from '../data/company';
import Navbar from './navbar';
import axios from 'axios';


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


export default function CompanyDetail(props){
    const [comp,setComp]= useState([]);

   const getComp = ()=>{
    axios.get("https://dummy-wireframe.iecsemanipal.com/stock/"+props.match.params.id,{
        params:{
            apikey:process.env.REACT_APP_API_KEY
        }
    })
    .then((resp)=>{
        setComp(resp.data.data);
        //console.log(resp.data.data);
    })
    .catch(err=>{
        console.log(err);
    })
   }

    useEffect(()=>{
        getComp();
        //setComp(compData.data[0]);
        console.log(comp);
    },[]);
    return(
        <div className="container comp-container">
            <Navbar></Navbar>
            <br/><br/>
            <div>
                <h1>{comp.Name}</h1>
                <p  className="comp-content">{comp.Description}</p>
                <Carousel responsive={responsive}  showDots={true}>
                <div className="info">
                    <p>Symbol - {comp.Symbol}</p>
                    <p>Asset Type - {comp.AssetType}</p>
                    <p>CIK - {comp.CIK}</p>
                    <p>Exchange - {comp.Exchange}</p>
                    <p>Currency - {comp.Currency}</p>
                </div>
                <div className="info">
                    <p>Country - {comp.Country}</p>
                    <p>Sector - {comp.Sector}</p>
                    <p>Industry - {comp.Industry}</p>
                    <p>Address - {comp.Address}</p>
                </div>
                <div className="info">
                    <p>Full Time Employees - {comp.FullTimeEmployees}</p>
                    <p>Fiscal Year End - {comp.FiscalYearEnd}</p>
                    <p>Latest Quarter - {comp.LatestQuarter}</p>
                    <p>Market Capitalization - {comp.MarketCapitalization}</p>
                    <p>EBITDA - {comp.EBITDA}</p>
                </div>
                <div className="info">
                    <p>PE Ratio - {comp.PERatio}</p>
                    <p>PEG Ratio - {comp.PEGRatio}</p>
                    <p>Book Value - {comp.BookValue}</p>
                    <p>Dividend Per Share - {comp.DividendPerShare}</p>
                    <p>Dividend Yield - {comp.DividendYield}</p>
                </div>
                <div className="info">
                    <p>EPS - {comp.EPS}</p>
                    <p>Revenue Per Share TTM - {comp.RevenuePerShareTTM}</p>
                    <p>Profit Margin - {comp.ProfitMargin}</p>
                    <p>Operating Margin TTM - {comp.OperatingMarginTTM}</p>
                    <p>Return On Assets TTM - {comp.ReturnOnAssetsTTM}</p>
                </div>
                <div className="info">
                    <p>Return On Equity TTM - {comp.ReturnOnEquityTTM}</p>
                    <p>Revenue TTM - {comp.RevenueTTM}</p>
                    <p>Gross Profit TTM - {comp.GrossProfitTTM}</p>
                    <p>Diluted EPS TTM - {comp.DilutedEPSTTM}</p>
                    <p>Quarterly Earnings Growth YOY - {comp.QuarterlyEarningsGrowthYOY}</p>
                </div>
                <div className="info">
                    <p>Quarterly RevenueGrowth YOY - {comp.QuarterlyRevenueGrowthYOY}</p>
                    <p>Analyst Target Price - {comp.AnalystTargetPrice}</p>
                    <p>Trailing PE - {comp.TrailingPE}</p>
                    <p>ForwardPE - {comp.ForwardPE}</p>
                    <p>Price To Sales Ratio TTM - {comp.PriceToSalesRatioTTM}</p>
                </div>
                <div className="info">
                    <p>Price To Book Ratio - {comp.PriceToBookRatio}</p>
                    <p>EV To Revenue - {comp.EVToRevenue}</p>
                    <p>EV To EBITDA - {comp.EVToEBITDA}</p>
                    <p>Beta - {comp.Beta}</p>
                    <p>Shares Outstanding - {comp.SharesOutstanding}</p>
                </div>
                <div className="info">
                    <p>Shares Float - {comp.SharesFloat}</p>
                    <p>Shares Short - {comp.SharesShort}</p>
                    <p>Shares Short Prior Month - {comp.SharesShortPriorMonth}</p>
                    <p>Short Ratio - {comp.ShortRatio}</p>
                    <p>Short Percent Outstanding - {comp.ShortPercentOutstanding}</p>
                </div>
                <div className="info">
                    <p>Short Percent Float - {comp.ShortPercentFloat}</p>
                    <p>Percent Insiders - {comp.PercentInsiders}</p>
                    <p>Percent Institutions - {comp.PercentInstitutions}</p>
                    <p>Forward Annual Dividend Rate - {comp.ForwardAnnualDividendRate}</p>
                    <p>Forward Annual Dividend Yield - {comp.ForwardAnnualDividendYield}</p>
                </div>
                <div className="info">
                    <p>Payout Ratio - {comp.PayoutRatio}</p>
                    <p>DividendDate - {comp.DividendDate}</p>
                    <p>ExDividendDate - {comp.ExDividendDate}</p>
                    <p>Last Split Factor - {comp.LastSplitFactor}</p>
                    <p>Last Split Date - {comp.LastSplitDate}</p>
                </div>
                </Carousel>
            </div>
        </div>
    )
}