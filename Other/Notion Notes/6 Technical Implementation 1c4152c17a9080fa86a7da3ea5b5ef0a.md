# 6. Technical Implementation

### Security

- Core [puzzle](4%20Puzzle%20Mechanics%201c4152c17a908070aafee18a37826658.md) logic validated server-side (no trivial “view source” cheats).

### Saving Progress

- No username/password
- On website launch each user will have a NEW magic link generated e.g. neondreams.world?magic=yellow-buzz-5842
    - Magic link will be generated from 2 lists of words and numbers concatenated with hyphens
    - Story progress for a given magic link will be stored on a server side
    - After revisiting the page, if user wants to continue, will need to use magic link from a previous visit
- Puzzle states are tracked server-side, but not explicitly shown to the user