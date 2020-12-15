import React from "react";
import {
  ReactiveBase,
  ReactiveList,
  DataSearch,
  SelectedFilters,
  ResultList
} from "@appbaseio/reactivesearch";
import "./styles.css";

const App = () => {
  return (
    <ReactiveBase
      app="testapp"
      credentials="2WL1PxmTj:feb08265-a3cd-44bf-8000-5d1415e20ffb"
      enableAppbase
      url="https://test-zmwbaqj-arc.searchbase.io"
    >
      <div className="app">
        <div></div>
        <div>
          <DataSearch
          placeholder="חפש"
            componentId="search"
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
          />
          <SelectedFilters />
          <ReactiveList
            componentId="SearchResult"
            dataField="standard_name"
            size={3}
            className="result-list-container"
            pagination
            URLParams
            highlight
            highlightFields={[]}
            highlightOptions={{
              fragment_size: 100,
              number_of_fragments: 5,
              post_tags: ["</mark>"],
              pre_tags: ["<mark>"]
            }}
            includeFields={["*"]}
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
                          className="book-title"
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
                                {item.sub_num1} {item.sub_desc1}
                                <br></br>
                                {item.sub_num2} {item.sub_desc2}
                                <br></br>
                                {item.sub_num3} {item.sub_desc3}
                                <br></br>
                                {item.sub_num4} {item.sub_desc4}
                              </span>
                            </div>
                          </div>
                          <span className="full_text">Pub {item.text}</span>
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
    </ReactiveBase>
  );
};

export default App;
