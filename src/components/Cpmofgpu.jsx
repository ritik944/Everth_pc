// import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Banner from "../shared/banner";
import { useState, useEffect } from "react";
import GPUPRICE from "../assets/GPUPRICE.js";
import { motion } from "framer-motion";
import { fadeIn } from "../shared/Variants.js";
import data from "../assets/csvjson (1).js";

// old code
export default function Example() {
  const [CHIPSET, setchipset] = useState([]);
  const [SERIES, setseries] = useState([]);
  const [MODEL, setmodel] = useState([]);
  const [BRAND, setbrand] = useState([]);
  const [CONDITION, setcondition] = useState([]);

  const [isseriesenable, setisseriesenable] = useState(false);
  const [ismodelenabel, setismodelenable] = useState(false);
  const [isbrandenabel, setisbrandenable] = useState(false);

  // const chipsets = ["NVIDIA", "AMD"];
  useEffect(() => {
    const chipsets = [
      ...new Set(
        data.map((v) => {
          return v["CHIPSET"];
        })
      ),
    ];
    console.log(chipsets);
    setchipset(chipsets);
  }, []);

  // const series = {
  //   NVIDIA: ["GTX1600", "RTX2000", "RTX3000", "RTX4000"],
  //   AMD: ["RX6000"],
  // };
  useEffect(() => {
    const series = [
      ...new Set(
        data.map((v) => {
          return v["SERIES"];
        })
      ),
    ];
    console.log(series);
    setseries(series);
  }, []);

  // const model = {
  //   GTX1600: ["1600 SUPER"],
  //   RTX2000: ["2060", "2060 SUPER"],
  //   RTX3000: ["3060 TI", "3070", "3070 TI", "3090"],
  //   RTX4000: ["4070", "4070 TI"],
  //   RX6000: ["6700 XT"],
  // };

  const brand = {
    "1660 SUPER": ["Zotac", "Colourful"],
    2060: ["Inno3d"],
    "2060 SUPER": ["Inno3d"],
    "3060 TI": ["Galax", "Zotac"],
    3070: ["Zotac", "Galax"],
    "3070 TI": ["Colourful", "Zotac"],
    3090: ["Zotac"],
    4070: ["Zotac", "Galax"],
    "4070 TI": ["Zotac"],
    "6700 XT": ["Asrock"],
  };
  const conditions = [
    "used",
    "used - Orignal Box (opened)",
    "Brand New (unopened sealed)",
  ];
  const warnaty = [];
  const handelchipsetchange = (selecedchipset) => {
    setchipset(selecedchipset);
    setseries("");
    setisseriesenable(true);
  };
  const handelserieschange = (selesctesseries) => {
    setseries(selesctesseries);
    setmodel("");
    setismodelenable(true);
  };
  const handelmodelchange = (selectedmodel) => {
    setmodel(selectedmodel);
    setbrand("");
    setisbrandenable(true);
  };
  const handelbrandchange = (selectedbrand) => {
    setbrand(selectedbrand);
    setcondition("");
  };
  return (
    <div className="md:px-12 p-4  max-w-screen-2xl mx-auto mt-24">
      <div className="gradienbg1 h-screen-xl rounded-xl md:p-9 px-4 py-9">
        <p className=" text-center text-4xl font-bold mb-6 leading-relaxed">
          CURRENT MARKET PRICE OF GRAPHIC CARD
        </p>
        <div className="flex-col  ">
          <div className="flex sm: space-x-20 m-10">
            <div id="chipset" className="md:col-span-3">
              <label
                htmlFor="CHIPSET"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                CHIPSET
              </label>
              <div className="mt-2">
                <select
                  id="chipsets"
                  onChange={(e) => handelchipsetchange(e.target.value)}
                  value={CHIPSET}
                  className="block w-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="/">select</option>
                  {CHIPSET.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div id="series" className="md:col-span-3">
              <label
                htmlFor="series"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                SERIES
              </label>
              <div className="mt-2">
                <select
                  id="series"
                  onChange={(e) => handelserieschange(e.target.value)}
                  value={SERIES}
                  className="block w-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="/">select</option>
                  {isseriesenable &&
                    SERIES.map((seriesitem) => (
                      <option key={seriesitem} value={seriesitem}>
                        {seriesitem}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div id="model" className="sm:col-span-3">
              <label
                htmlFor="model"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                MODEL
              </label>
              <div className="mt-2">
                <select
                  id="models"
                  onChange={(e) => handelmodelchange(e.target.value)}
                  value={MODEL}
                  className="block w-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="/">select</option>
                  {ismodelenabel &&
                    model[SERIES].map((modelitem) => (
                      <option key={modelitem} value={modelitem}>
                        {modelitem}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex space-x-20 m-10">
            <div id="brand" className="sm:col-span-3">
              <label
                htmlFor="brand"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                BRAND
              </label>
              <div className="mt-2">
                <select
                  id="models"
                  onChange={(e) => handelbrandchange(e.target.value)}
                  value={BRAND}
                  className="block w-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="/">select</option>
                  {isbrandenabel &&
                    brand[MODEL].map((branditem) => (
                      <option key={branditem} value={branditem}>
                        {branditem}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div id="condition" className="sm:col-span-3">
              <label
                htmlFor="condition"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                CONDITION
              </label>
              <div className="mt-2">
                <select
                  id="models"
                  onChange={(e) => setcondition(e.target.value)}
                  value={CONDITION}
                  className="block w-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value="/">select</option>
                  {isbrandenabel &&
                    conditions.map((conditem) => (
                      <option key={conditem} value={conditem}>
                        {conditem}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
          <div>
            <div className="space-x-20 m-10 space-y-5">
              <button onClick="/" className="btnprimary">
                get qoute
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

// new example component
export function Example2() {
  const [configuredData, setConfiguredData] = useState(data);
  const [visiblePriceCard, setPriceCard] = useState(false);
  return (
    <div className=" md:px-12 p-4 max-w-screen-2xl  mx-auto ">
      <div className="gradientbg h-screen-xl  rounded-xl md:p-9 px-4 py-9 mt-24">
        <motion.div
          initial={{ opacity: 0 }}
        animate={{ opacity: 4 }}
        >
          {!visiblePriceCard ? (
            <form action="">
              <p className="flex justify-center text-5xl font-bold text-white mb-6 leading-relaxed">
                CURRENT MARKET PRICE OF GRAPHIC CARD
              </p>
              <div className="flex-col ">
                <div className="flex  space-x-20 m-10">
                  <div id="chipset" className="md:col-span-3">
                    <label
                      htmlFor="CHIPSET"
                      className="block text-lg font-medium leading-6 text-gray-900"
                    >
                      CHIPSET
                    </label>
                    <div className="mt-2">
                      <select
                        id="chipsets"
                        onChange={(e) =>
                          setConfiguredData((prevData) => {
                            return prevData.filter(
                              (v) => v.CHIPSET == e.target.value
                            );
                          })
                        }
                        defaultValue={"select"}
                        className="block w-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option value="/">select</option>
                        {[...new Set(configuredData.map((v) => v.CHIPSET))].map(
                          (item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  </div>
                  <div id="series" className="md:col-span-3">
                    <label
                      htmlFor="series"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      SERIES
                    </label>
                    <div className="mt-2">
                      <select
                        id="series"
                        onChange={(e) =>
                          setConfiguredData((prevData) => {
                            return prevData.filter(
                              (v) => v.SERIES == e.target.value
                            );
                          })
                        }
                        defaultValue={"Select"}
                        className="block w-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option value="/">select</option>
                        {[...new Set(configuredData.map((v) => v.SERIES))].map(
                          (seriesitem) => (
                            <option key={seriesitem} value={seriesitem}>
                              {seriesitem}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  </div>
                  <div id="model" className="sm:col-span-3">
                    <label
                      htmlFor="model"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      MODEL
                    </label>
                    <div className="mt-2">
                      <select
                        id="models"
                        onChange={(e) =>
                          setConfiguredData((prevData) => {
                            return prevData.filter(
                              (v) => v.MODEL == e.target.value
                            );
                          })
                        }
                        defaultValue={"MODEL"}
                        className="block w-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option value="/">select</option>
                        {[...new Set(configuredData.map((v) => v.MODEL))].map(
                          (modelitem) => (
                            <option key={modelitem} value={modelitem}>
                              {modelitem}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-20 m-10">
                  <div id="brand" className="sm:col-span-3">
                    <label
                      htmlFor="brand"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      BRAND
                    </label>
                    <div className="mt-2">
                      <select
                        id="models"
                        onChange={(e) =>
                          setConfiguredData((prevData) => {
                            return prevData.filter(
                              (v) => v.BRAND == e.target.value
                            );
                            // return prevData;
                          })
                        }
                        defaultValue={"BRAND"}
                        className="block w-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option value="/">select</option>
                        {[...new Set(configuredData.map((v) => v.BRAND))].map(
                          (branditem) => (
                            <option key={branditem} value={branditem}>
                              {branditem}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  </div>
                  <div id="WARRANTY" className="sm:col-span-3">
                    <label
                      htmlFor="WARRANTY"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      WARRANTY
                    </label>
                    <div className="mt-2">
                      <select
                        id="WARRANTY"
                        onChange={(e) =>
                          setConfiguredData((prevData) => {
                            return prevData.filter(
                              (v) => v.Warranty == e.target.value
                            );
                            // return prevData;
                          })
                        }
                        defaultValue={"BRAND"}
                        className="block w-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      >
                        <option value="/">select</option>
                        {[...new Set(configuredData.map((v) => v.Warranty))].map(
                          (warrantyitem) => (
                            <option key={warrantyitem} value={warrantyitem}>
                              {warrantyitem}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                    </div>
                  {/* <div id="condition" className="sm:col-span-3">
                <label
                  htmlFor="condition"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  CONDITION
                </label>
                <div className="mt-2">
                  <select
                    id="models"
                    onChange={(e) => setConfiguredData((prevData) => {
                      return prevData.filter((v) => v.CONDITION == e.target.value);
                      // return prevData;
                    })}
                    defaultValue={"CONDITION"}
                    className="block w-40 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value="/">select</option>
                    {[...new Set(configuredData.map((v) => v["Warranty (year's)"]))].map((conditem) => (
                        <option key={conditem} value={conditem}>
                          {conditem}
                        </option>
                      ))}
                  </select>
                </div>
              </div> */}
                </div>
                <div>
                  <div className="flex space-x-20 m-10 space-y-5">
                    <button
                      onClick={() => {
                        setPriceCard(true);
                      }}
                      className="btnprimary "
                    >
                      Get Quote
                    </button>
                    <button
                      onClick={(e) => {
                        setConfiguredData(data);
                      }}
                      className="btnprimary"
                      type="reset"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </form>
          ) : (
            <PriceCard v={configuredData[0]} setVisible={setPriceCard} />
          )}
        </motion.div>
      </div>
    </div>
  );
}

// price card component
function PriceCard({ v, setVisible }) {
  return (
    <div>
    <motion.div
          initial={{ opacity: 0 }}
        animate={{ opacity: 4 }}
        >
      <h1 className="text-4xl font-bold text-white text-left">
        Selected Graphic Card is {v.BRAND} {v.CHIPSET} {v.SERIES} {v.MODEL}
      </h1>
      <h2 className="text-2xl mt-5  text-primary">
        BUYING PRICE PRICE - ₹{v["Buying Price"]}
      </h2>
      <h2 className="text-2xl mt-5  text-primary">
      CURRENT MARKET PRICE - ₹{v["Faster Selling"]}
      </h2>
      <p className="mt-5">WARRANTY  - {v["Warranty"]}  YEAR</p>
      <div className="h-10"></div>
      <button
        className="btnprimary"
        onClick={(e) => {
          setVisible(false);
        }}
      >
        Back
      </button>
      </motion.div>
    </div>
  );
}
