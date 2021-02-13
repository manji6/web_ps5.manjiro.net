import React from "react";
import { graphql } from 'gatsby'
import Layout from "../components/layout";
import { GatsbySeo } from "gatsby-plugin-next-seo";

const IndexPage = (props) => {

  return (
    <Layout>
      <GatsbySeo
        title={props.data.site.siteMetadata.title}
        openGraph={{
          url: props.data.site.siteMetadata.siteUrl,
          title: "PlayStation 5 の発売日を思い出す為のサイト",
          description: "PlayStation 5 は一体いつになったら買えるのか、買えた時の喜びと何日苦悩したのかを調べるサイトです。",
          images: [{
            url: props.location.host + props.data.file.childImageSharp.fixed.src
          }]
        }}
      />
      <div className="container">
        <section className="section">
          <h2 className="is-size-4 title">
            今日は<span id="data_today"></span>、
            PlayStation 5 発売から
            <span id="data_duration" className="is-size-1"></span>日経過しました。
          </h2>
          <h3 className="subtitle">今日買えた人はラッキーですね!</h3>
          <div className="content">
          <div className="tags are-large">
              <span className="tag is-success is-large is-hidden" id="label_duration_month_anniversary">ちょうどぴったり<span id="data_duration_month">○</span>ヶ月です。</span>
              <span className="tag is-success is-large is-hidden" id="label_duration_day_exactly">ちょうどぴったり<span id="data_duration_day">○</span>日目です。</span>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="content">
            <h3>ちなみに</h3>
            <p>PlayStation 5 の発売日は 2020年11月12日(木) でした。</p>
            <p>六曜では「大安」でした。</p>
          </div>
        </section>
        <section className="section">
          <div className="content">
            <ul>
              <li>コロナウイルスの影響で発売日イベントや店頭への販売行列はなく、オンラインのみの販売となりました。</li>
              <li>発売日から品薄状態が続き、転売価格が8万円〜10万円あたりになっております。</li>
              <li>2021/02/13 時点でも転売行為が横行しており、未だに抽選販売や実店舗のゲリラ販売です。</li>
              <li className="has-text-weight-bold">品薄状況を作り出している転売ヤーには加担せず、欲しい人も我慢して店舗購入を目指しましょう。</li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    file(relativePath: {eq: "ps5-src-sony.jpg"}) {
      id
      childImageSharp {
        fixed {
          src
          srcSet
          originalName
        }
      }
    }
    site{
      siteMetadata{
        title
      }
    }
  }
`;

export default IndexPage;
