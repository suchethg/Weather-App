# Weather-App



#Credits:

1.https://cors-anywhere.herokuapp.com/

2.Dark Sky API — Overview
The Dark Sky API allows you to look up the weather anywhere on the globe, returning (where available):
Current weather conditions
Minute-by-minute forecasts out to one hour
Hour-by-hour and day-by-day forecasts out to seven days
Hour-by-hour and day-by-day observations going back decades
Severe weather alerts in the US, Canada, European Union member nations, and Israel

Weather API Call Types


The Forecast Request returns the current weather forecast for the next week.
The Time Machine Request returns the observed or forecast weather conditions for a date in the past or future.
Weather Conditions
The Dark Sky API offers a full collection of meteorological conditions in 39 different languages, including:

Apparent (feels-like) temperature
Atmospheric pressure
Cloud cover
Dew point
Humidity
Liquid precipitation rate
Moon phase
Nearest storm distance
Nearest storm direction
Ozone
Precipitation type
Snowfall
Sun rise/set
Temperature
Text summaries
UV index
Wind gust
Wind speed
Wind direction
Both forecast and time machine requests return the same weather conditions, in the same convenient JSON format. You can parse the response directly, or use one several community-contributed libraries to interact with our API in the programming language of your choice.
API Request Types
Forecast Request
      https://api.darksky.net/forecast/[key]/[latitude],[longitude]
      
A Forecast Request returns the current weather conditions, a minute-by-minute forecast for the next hour (where available), an hour-by-hour forecast for the next 48 hours, and a day-by-day forecast for the next week.




