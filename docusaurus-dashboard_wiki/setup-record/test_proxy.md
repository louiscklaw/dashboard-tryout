---
---

# Test proxy

### MITM_PROXY

proxy: 192.168.10.61:8095

page: http://192.168.10.61:8096/#/flows

# Rotating proxy

curl --proxy 192.168.10.61:5566 https://api.my-ip.io/ip