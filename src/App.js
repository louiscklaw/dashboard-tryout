import logo from './logo.svg';
import './App.css';

function ShowUptimeKumaBadge({ imgsrc, target_src }) {
  if (target_src) {
    return (
      <div>
        <a href={target_src} target="_blank" rel="noreferrer">
          <img src={imgsrc} />
        </a>
      </div>
    );
  }
  return (
    <div>
      <img src={imgsrc} />
    </div>
  );
}

function GetUptimeKumaBadgeLink(status_idx) {
  return `//status.iamon99.com/api/badge/${status_idx}/status`;
}


function GetHealthCheckBadgeLink(status_idx) {
  return `//status.iamon99.com/api/badge/${status_idx}/status`;
}

const Cell1_1 = (
  <>
    <div className="cell">
      <div className="cell_title">cell1.1 (portfolio)</div>
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(41)}?label=aboutme.louislabs.com`}
        target_src={'//aboutme.louislabs.com/'}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(89)}?label=aboutme.louislabs.com/pay`}
        target_src={'//aboutme.louislabs.com/pay/'}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(96)}?label=fs.louislabs.com`}
        target_src={'//fs.louislabs.com/'}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(95)}?label=git.louislabs.com`}
        target_src={'//git.louislabs.com/'}
      />{' '}
    </div>
  </>
);

const Cell1_2 = (
  <>
    <div className="cell">
      <div className="cell_title">cell1.2 (monitor)</div>
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(10)}?label=healthcheck.louislabs.com`}
        target_src={'//healthcheck.louislabs.com/'}
      />{' '}
    </div>
  </>
);

const Cell1_3 = (
  <>
    <div className="cell">
      <div className="cell_title">cell1.3 (changedetect)</div>
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(5)}?label=private-changedetect`}
        target_src={'//private-changedetect.iamon99.com/'}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(41)}?label=carousell.louislabs.com`}
        target_src={'//carousell.louislabs.com/'}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(24)}?label=job.louislabs.com`}
        target_src={'//job.louislabs.com/'}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(90)}?label=new.louislabs.com`}
        target_src={'//new.louislabs.com/'}
      />
    </div>
  </>
);

const Cell1_4 = (
  <>
    <div className="cell">
      <div className="cell_title">cell1.4 (REST/functions)</div>
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(41)}?label=api.louislabs.com`}
        target_src={'//api.louislabs.com/'}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(41)}?label=event.louislabs.com`}
        target_src={'//event.louislabs.com/'}
      />
    </div>
  </>
);

const Cell1_5 = (
  <>
    <div className="cell">
      <div className="cell_title">cell1.5 (DB)</div>
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(41)}?label=nocodb.louislabs.com`}
        target_src={'//nocodb.louislabs.com/'}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(100)}?label=bb.louislabs.com`}
        target_src={'//bb.louislabs.com/'}
      />
    </div>
  </>
);

const Cell1_6 = (
  <>
    <div className="cell">
      <div className="cell_title">cell1.6 (carousell)</div>
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(41)}?label=fetcher`}
        target_src={'//api.louislabs.com/'}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(41)}?label=fetcher-db`}
        target_src={'//api.louislabs.com/'}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(101)}?label=carousell-exercise-1`}
        target_src={'http://192.168.10.21:6099/'}
      />
      <ShowUptimeKumaBadge
        imgsrc={`https://healthcheck.iamon99.com/b/2/f1d68974-3186-4d58-907a-a54d99f5bda0.svg`}
        target_src={'http://192.168.10.21:6099/'}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(102)}?label=carousell-exercise-2`}
        target_src={'http://192.168.10.21:6070/'}
      />
      <ShowUptimeKumaBadge
        imgsrc={`https://healthcheck.iamon99.com/b/2/bd9fb3a6-05f7-4d38-bca6-e321196aabf8.svg`}
        target_src={'http://192.168.10.21:6070/'}
      />
    </div>
  </>
);

const Cell1_7 = (
  <>
    <div className="cell">
      <div className="cell_title">cell1.7 (jobsdb-fetcher)</div>
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(80)}?label=jobsdb-desktop`}
        target_src={'http://192.168.10.21:6082/'}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(104)}?label=fetcher-db`}
        target_src={'http://192.168.10.21:8196/_/#/login/'}
      />
    </div>
  </>
);

const Cell1_8 = (
  <>
    <div className="cell">
      <div className="cell_title">cell1.8 (automation)</div>
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(23)}?label=n8n_health_check`}
        target_src={'//n8n.louislabs.com/'}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(22)}?label=n8n.louislabs.com`}
        target_src={'//n8n.louislabs.com/'}
      />
    </div>
  </>
);

const Cell2_1 = (
  <>
    <div className="cell">
      <div className="cell_title">cell2.1 (shop.louislabs.com)</div>
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(97)}?label=shop.louislabs.com`}
        target_src={'//shop.louislabs.com/'}
      />
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(41)}?label=changedetect`}
        target_src={'//shop.louislabs.com/'}
      />
    </div>
  </>
);

const Cell2_2 = (
  <>
    <div className="cell">
      <div className="cell_title">cell2.2 (xxx not filled)</div>
      <ShowUptimeKumaBadge
        imgsrc={`${GetUptimeKumaBadgeLink(41)}?label=n8n.louislabs.com`}
        target_src={'//n8n.louislabs.com/'}
      />
    </div>
  </>
);

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h3>All status table</h3>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        {Cell1_1}
        {Cell1_2}
        {Cell1_3}
        {Cell1_4}
        {Cell1_5}
        {Cell1_6}
        {Cell1_7}
        {Cell1_8}

        {Cell2_1}
        {Cell2_2}
      </div>
    </div>
  );
}

export default App;
