# Going live on transdatanexus.com

DNS is managed at GoDaddy (nameservers ns63/ns64.domaincontrol.com). In GoDaddy → My Products → transdatanexus.com → DNS, set:

| Type  | Name | Value                      | TTL |
|-------|------|----------------------------|-----|
| A     | @    | 185.199.108.153            | 600 |
| A     | @    | 185.199.109.153            | 600 |
| A     | @    | 185.199.110.153            | 600 |
| A     | @    | 185.199.111.153            | 600 |
| CNAME | www  | sureshsormare.github.io    | 600 |

Delete the existing `A @ 216.24.57.1` and the `CNAME www → transdatanexus.onrender.com` records first.
Then run `./go-live.sh` in this folder. HTTPS is issued by GitHub within ~15 minutes; enforce it with the command the script prints.
Until DNS is changed, do NOT add the CNAME file: it would redirect the working github.io address to a dead domain.
