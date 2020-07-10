import React, { Component } from 'react';
import './App.css';
import { Report } from 'powerbi-report-component';


export default class extends Component {
  onEmbedded(embed) {
    console.log(`Report embedded: `, embed, this);
  }

  render() {
    const style = {height: 650}
    return (
      <div>
        <h1>Smart FHIR dashboard</h1>

        <Report
          tokenType="Embed" // "Aad"
          accessToken="H4sIAAAAAAAEAB3Sxw6r2BYE0H-5U1oy2dBSD8jJ5GQ8I5t4yHBovX9_Vs_2oFQqLe1__zgp7EFa_Pn7jzAsbIU_FKDjVDxxbtz1rV4_bry8LuDlnAv7bpFBPamT_cGvrSjaiBguJatJvED4GIqBGBaBq893Kjf0iBLoKEj5lZ_PET8WmgW_mpPT-VLOL5asdRV7nTuEeS4AM7HsQ1xdo61_Y2YTCanZNk_cSp7i3UfaxdeCvqaHPnz2HS1e8plGgnM3z-RsGkZWYZvokl-zLy97oKzvUt2TQvuxpJ6A0eOK-7wA8BRaTiCPRDhl_C6wRhoNdHr2m4B6V12vIpKmsZUGN5eu381Oy6gHBEzHEpHtmJZhjZBz0mxsPvSjpj_QsmYwsJ7LSkMSGgReSYqeVTwHQS6-bzwQhSMU7cD0TRYdY8azichvn_FrPHV1YfdagtpdTjjuNs4FhNWI7Lvdfb_52ucCPPfWpYFXYDbuycLY7Zg4W37cMelAIhuvye-gi9_c8voyppiJH893VPWJYE8ahomk2LOTmQuIGgTqqUO2CxX2Udrwgnq3dFeCWf96NMt2B_eevPwmoBZLZiEIwySU_iotojXNiGqdrLK0h-08it1SKALEiZCmsIgYaQOI7hZ4_7ENHAFRNvi3mPLD3DN9yVFc7izj4n1JeXhGVRWHSzKYEl9wX7wNsULKI8dM6QAnadE05VB7Zx_puvOUdn_Sd0UutGF43bryqgufPHaGea94zqvlhgB_SuQ_f_76Iyxw2oBRwt_r0twVoTH1-vJLQWXT_N5P0lsOfHwzd3_XjYoN3NUQlMB8u8yhrR-6pSMGkrSuyskwMtCQ4QKkyEX5epmDuhV0tiGnDtNQlIrbJHh7Iqe1BnIBM5SzHyOhCAnz6KMWHPtDht2w1F_8IXfPwNiibbtFSMx9F1xmkBBZ-RH2qQ9VaVRHIL72FMpUZjAx_AbLTPtMWK5HPZyasnMG7luqK6ud-_1kiByMmHguj3mb7htslb2gR7cmn5acUD7BWznbY7eVjCIcwZqInuWe7cdwGUL70DZ6PLy0LDcML7qUCYzOGemiGhv0yp8Rnm2SIu6-t0yqjtXzc7Io_47YYf9WtIhqAIvOf_5jhtO3XLTop0wi4kTpURJ3dfqu0lo8Xs1S_5fym3pMt30pf7HWDE66w6LyQFcEaF-c8A60NMludNu3oICIRvwBAqwkgeHT9ZGmLpkNr97FWXXITM9HNo5idIA0nUF6YGPQXrgW_ngOBxRzjJk74lStghIIi4IfAOErvjomouloud2lIi3lOHPL37BmT0lTlSsk3icOvdcEkXYTuzNCAdtu5UT5joHv2wrUDt5JUBivrlL-yrzO_MzqIbz42XW9IZuhspx45yPf3EDxbdSAAE78ll8iW2KauaR7nN3GbY6DtA1NLCxXJ_wm520xNMG6S9BN-WrwQOkeDYuVVy1AD9p5I6EP4Xqn5THvjeXQ1LnZ2BfTh7Vb73ByJ0fyn4efC4Fvce6P-X__B4CYJjOuBQAA.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjpmYWxzZX19" // accessToken goes here
          embedUrl="https://app.powerbi.com/reportEmbed?reportId=ffd96ae6-d380-4b0a-b892-9b10c1ccb332&groupId=c01c3203-966c-4a73-a8a9-50b6f9cc8bc8&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlfX0%3d" // embedUrl goes here
          embedId="ffd96ae6-d380-4b0a-b892-9b10c1ccb332" // report or dashboard Id goes here
          style={style}
          pageView="fitToWidth"
          onLoad={(dashboard) => {
            console.log('Hola');
            this.dashboard = dashboard;
          }}
          onTileClicked={(data) => {
            console.log('Adios')
          }}
        />
      </div>
    );
  }
}


