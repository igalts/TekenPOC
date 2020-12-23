import React from "react";
import {
  ReactiveBase,
  ReactiveList,
  MultiList,
  DataSearch,
  SelectedFilters,
  ResultList
} from "@appbaseio/reactivesearch";
import "./styles.css";

const App = () => {
  return (

		<ReactiveBase app="teken" credentials="M8TP9RvjO:e5ace1c4-b847-49c1-88d6-2afa521ac233" enableAppbase url="https://teken-ycdniyw-arc.searchbase.io">
      <div className="app">
        <div> 
          <DataSearch className="datasearch"
            placeholder="חפש"
            componentId="search"
            includeFields={["*"]}
            showFilter={true}
            filterLabel="חיפוש"
            debounce={150}
            dataField={[
              "text",
              "text.keyword",
              "text.search",
              "text.autosuggest",
              "text.delimiter",
              "text.synonyms",
              "text.lang",
              "sub_desc4",
              "sub_desc4.keyword",
              "sub_desc4.search",
              "sub_desc4.autosuggest",
              "sub_desc4.delimiter",
              "sub_desc4.synonyms",
              "sub_desc4.lang",
              "sub_desc3",
              "sub_desc3.keyword",
              "sub_desc3.search",
              "sub_desc3.autosuggest",
              "sub_desc3.delimiter",
              "sub_desc3.synonyms",
              "sub_desc3.lang",
              "sub_desc2",
              "sub_desc2.keyword",
              "sub_desc2.search",
              "sub_desc2.autosuggest",
              "sub_desc2.delimiter",
              "sub_desc2.synonyms",
              "sub_desc2.lang",
              "sub_desc1",
              "sub_desc1.keyword",
              "sub_desc1.search",
              "sub_desc1.autosuggest",
              "sub_desc1.delimiter",
              "sub_desc1.synonyms",
              "sub_desc1.lang"
            ]}
            defaultValue=""
            enableSynonyms
            fieldWeights={[
              1,
              1,
              0.1,
              0.9,
              0.4,
              0.7,
              0.9,
              1,
              1,
              0.1,
              0.9,
              0.4,
              0.7,
              0.9,
              1,
              1,
              0.1,
              0.9,
              0.4,
              0.7,
              0.9,
              1,
              1,
              0.1,
              0.9,
              0.4,
              0.7,
              0.9,
              1,
              1,
              0.1,
              0.9,
              0.4,
              0.7,
              0.9
            ]}
            fuzziness={0}
            queryFormat="and"
            title="מערכת לחיפוש תקנים"
            autosuggest={false}

          />
          <SelectedFilters />
          <div>

				</div>
        <div class="all_body">
        <div className="filterReslut">
        <MultiList
            className="filter"
            componentId="list-0"
            dataField="standard_name.keyword"
            defaultValue={[]}
            queryFormat="or"
            filterLabel="סינון"
            showSearch={false}
            react={{
              and: ["search","filter"]
              }}
              //showFilter={true}
                size={5}
                sortBy="count"
                title="תקנון\תקן "
          />
        </div>
        <div className="SearchResult">
          <ReactiveList
            componentId="SearchResult"
            dataField="standard_name"
            size={10}
            className="result-list-container"
            pagination
            URLParams

              renderResultStats={
                function(stats){
                    return (
                        `מציג ${stats.displayedResults} מתוך ${stats.numberOfResults} תוצאות`
                    )
                }
                
            }
            renderNoResults={
              function(renderNoResults){
                  return (
                      `לא נמצאו תוצאות`
                  )
              }
              
          }
          renderError={(error) => (
            <div>
                שגיאה, אנא נסה שנית<br/><br/>{error}
            </div>
        )
    }
            

            react={{
              and: "search"
            }}
            render={({ data }) => (
              <ReactiveList.ResultListWrapper>
                {data.map((item) => (
                  <ResultList key={item._id}>
                    <ResultList.Content>
                      <ResultList.Title>
                        <div
                          className="standard_title"
                          dangerouslySetInnerHTML={{
                            __html: item.standard_name
                          }}
                        />
                      </ResultList.Title>
                      <ResultList.Description>
                        <div 
                        className="flex column justify-space-between"
                        >
                          <div>
                            <div>
                              <span className="sub_num_desc">
                              <div className="desc1">
                                <span  dangerouslySetInnerHTML={{__html: item.sub_num1}}/> <span dangerouslySetInnerHTML={{__html: item.sub_desc1}} />
                                </div>
                                 <div className="desc2">
                                <span dangerouslySetInnerHTML={{__html: item.sub_num2}}/> <span dangerouslySetInnerHTML={{__html: item.sub_desc2}}/>
                                </div>
                                <div className="desc3">
                                <span dangerouslySetInnerHTML={{__html: item.sub_num3}}/> <span dangerouslySetInnerHTML={{__html: item.sub_desc3}}/>
                                </div>
                                <div className="desc4">
                                <span dangerouslySetInnerHTML={{__html: item.sub_num4}}/> <span dangerouslySetInnerHTML={{__html: item.sub_desc4}}/>
                                </div>
                              </span>
                            </div>
                          </div>
                          <div>
                          <span className="full_text" dangerouslySetInnerHTML={{
                            __html: item.text
                          }}>
                          </span>
                          </div>
                        </div>
                      </ResultList.Description>
                    </ResultList.Content>
                  </ResultList>
                ))}
              </ReactiveList.ResultListWrapper>
            )}
          />
            </div>
        </div>
        </div>
      </div>
    </ReactiveBase>
  );
};

export default App;