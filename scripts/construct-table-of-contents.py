#!/usr/bin/env python3

import glob

projects = sorted([
    (
        fname.split('/')[1],
        open(fname, 'r').readlines()[2].strip()
    )
    for fname in glob.glob("./*/README.md")
], key=lambda x: x[0])

print("| Folder | Description |")
print("|--------|-------------|")
for f, d in projects:
    print("| [{}]({}) | {} |".format(f, f, d))
