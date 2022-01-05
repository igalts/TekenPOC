import React, { useEffect } from "react";
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
  useEffect(() => {
    setTimeout(() => {
      const pagination = document.querySelectorAll(`[class*=pagination] a`);
      if (pagination && pagination.length) {
        pagination[0].innerText = "הקודם";
        pagination[pagination.length - 1].innerText = "הבא";
      }
    }, 1000);
  }, []);
  /* so this almost works - problem 
  useEffect(() => {
    setTimeout(() => {
      const clearAllButton = document.querySelectorAll(`[class*=SelectedFilters] a`)
      if (clearAllButton && clearAllButton.length) {

        clearAllButton[clearAllButton.length-1].innerText = "נקה הכל"

        
      } 
    }, 1000)
  }, [])*/

  const renderImage = (id) => {
    return id ? (
      <img
        width="40%"
        src={`https://drive.google.com/uc?export=view&id=${id}`}
        alt="igals-img"
      />
    ) : null;
  };
  return (
    <ReactiveBase
      app="tekenpoc"
      credentials="7JMvpzqHB:d391793a-e0f9-4b15-9cc9-2225347b1e88"
      enableAppbase
      url="https://tekenpoc-pthzvms-arc.searchbase.io"
    >
      <div className="app">
        <div className="top_bar">
          <div className="logo">
            <img
              className="logo"
              src={`https://drive.google.com/uc?export=view&id=163gTVC8jdA2ozXD3FsYFfBbpd3ABu3qs`}
              alt="logo"
            />
          </div>
          <div className="datasearch">
            <DataSearch
              className="datasearch"
              placeholder="חפש"
              componentId="search"
              style={{ background: "rgb(50, 50, 50)" }}
              includeFields={["*"]}
              filterLabel="חיפוש"
              debounce={150}
              highlight
              highlightFields={[
                "standard_name",
                "sub_desc1",
                "sub_desc1a",
                "sub_desc2",
                "sub_desc3",
                "sub_desc4",
                "text",
                "sub_num1",
                "sub_num1a",
                "sub_num2",
                "sub_num3",
                "sub_num4"
              ]}
              highlightOptions={{
                fragment_size: 0,
                number_of_fragments: 0,
                post_tags: ["</mark>"],
                pre_tags: ["<mark>"]
              }}
              dataField={[
                "text",
                "text.keyword",
                "text.search",
                "text.autosuggest",
                "text.delimiter",
                "text.synonyms",
                "text.lang",
                "Meta_text",
                "Meta_text.autosuggest",
                "Meta_text.delimiter",
                "Meta_text.keyword",
                "Meta_text.lang",
                "Meta_text.search",
                "Meta_text.synonyms",
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
                "sub_desc1a",
                "sub_num1",
                "sub_num1.autosuggest",
                "sub_num1.delimiter",
                "sub_num1.keyword",
                "sub_num1.lang",
                "sub_num1.search",
                "sub_num1.synonyms",
                "sub_num1a",
                "sub_num1a.autosuggest",
                "sub_num1a.delimiter",
                "sub_num1a.keyword",
                "sub_num1a.lang",
                "sub_num1a.search",
                "sub_num1a.synonyms",
                "sub_num2",
                "sub_num2.autosuggest",
                "sub_num2.delimiter",
                "sub_num2.keyword",
                "sub_num2.lang",
                "sub_num2.search",
                "sub_num2.synonyms",
                "sub_num3",
                "sub_num3.autosuggest",
                "sub_num3.delimiter",
                "sub_num3.keyword",
                "sub_num3.lang",
                "sub_num3.search",
                "sub_num3.synonyms",
                "sub_num4",
                "sub_num4.autosuggest",
                "sub_num4.delimiter",
                "sub_num4.keyword",
                "sub_num4.lang",
                "sub_num4.search",
                "sub_num4.synonyms",
                "sub_desc1.keyword",
                "sub_desc1.search",
                "sub_desc1.autosuggest",
                "sub_desc1.delimiter",
                "sub_desc1.synonyms",
                "sub_desc1.lang",
                "sub_desc1a.keyword",
                "sub_desc1a.search",
                "sub_desc1a.autosuggest",
                "sub_desc1a.delimiter",
                "sub_desc1a.synonyms",
                "sub_desc1a.lang"
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
              title=""
              autosuggest={false}
            />
          </div>
          <div className="left_menu"></div>
        </div>
        <div class="SelectedFilters">
          <SelectedFilters />
        </div>
        <div class="all_body">
          <div className="right_menu">
            <MultiList
              className="filter"
              componentId="list-0"
              dataField="standard_name.keyword"
              defaultValue={[]}
              queryFormat="and"
              filterLabel="סינון"
              showSearch={false}
              react={{
                and: ["search", "filter"]
              }}
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
              renderResultStats={function (stats) {
                return `מציג ${stats.displayedResults} מתוך ${stats.numberOfResults} תוצאות`;
              }}
              renderNoResults={function (renderNoResults) {
                return `לא נמצאו תוצאות`;
              }}
              renderError={(error) => (
                <div>
                  שגיאה, אנא נסה שנית
                  <br />
                  <br />
                  {error}
                </div>
              )}
              react={{
                and: ["search", "list-0"]
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
                          <div className="flex column justify-space-between">
                            <div>
                              <div>
                                <span className="sub_num_desc">
                                  <div className="desc1">
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: item.sub_num1
                                      }}
                                    />{" "}
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: item.sub_desc1
                                      }}
                                    />
                                  </div>
                                  <div className="desc1a">
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: item.sub_num1a
                                      }}
                                    />{" "}
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: item.sub_desc1a
                                      }}
                                    />
                                  </div>
                                  <div className="desc2">
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: item.sub_num2
                                      }}
                                    />{" "}
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: item.sub_desc2
                                      }}
                                    />
                                  </div>
                                  <div className="desc3">
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: item.sub_num3
                                      }}
                                    />{" "}
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: item.sub_desc3
                                      }}
                                    />
                                  </div>
                                  <div className="desc4">
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: item.sub_num4
                                      }}
                                    />{" "}
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: item.sub_desc4
                                      }}
                                    />
                                  </div>
                                </span>
                              </div>
                            </div>
                            <div>
                              <span
                                className="full_text"
                                dangerouslySetInnerHTML={{
                                  __html: item.text
                                }}
                              ></span>
                              <div className="image-container">
                                {renderImage(item.Images_id)}
                              </div>
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
    </ReactiveBase>
  );
};

export default App;
