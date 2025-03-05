import { ShowUptimeKumaBadge } from './App';

export function App() {
    return (
        <div className="App">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h3>All status table</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div className="cell">
                    <div className="cell_title">cell1.1</div>
                    <ShowUptimeKumaBadge imgsrc="//status.iamon99.com/api/badge/41/status?label=aboutme.louislabs.com" target_src={"//aboutme.louislabs.com/"} />
                    <ShowUptimeKumaBadge imgsrc="//status.iamon99.com/api/badge/89/status?label=aboutme.louislabs.com/pay" target_src={"//aboutme.louislabs.com/pay/"} />
                    <ShowUptimeKumaBadge imgsrc="//status.iamon99.com/api/badge/41/status?label=fs.louislabs.com" target_src={"//fs.louislabs.com/"} />
                    <ShowUptimeKumaBadge imgsrc="//status.iamon99.com/api/badge/41/status?label=git.louislabs.com" target_src={"//git.louislabs.com/"} />
                </div>

                <div className="cell">
                    <div className="cell_title">cell1.2</div>
                    <ShowUptimeKumaBadge imgsrc="https://status.iamon99.com/api/badge/41/status?label=healthcheck.louislabs.com" target_src={"//healthcheck.louislabs.com/"} />
                </div>





            </div>
        </div>





    );
}
