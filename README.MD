# ✨ eslint-plugin-avoid-comments

Some comments cause unnecessary noise in the code, so this rule makes ESLint disallow comments that do not fit the proposals of pre-configured **keywords**.

## Installation

```sh
npm install eslint-plugin-avoid-comments --save-dev
```

## Configuration

```js
// eslintrc.js
{
    "plugins": ["avoid-comments"],
    "rules": {
        "avoid-comments/avoid-comments": [
            "error",
            {
                "allow": ["PENDING", "FIXME", "REVIEW"],
            }
        ]
    }
}
```

> _In the trials ahead, it is recommended to wield this plugin alongside its extension [Comment Anchors](https://marketplace.visualstudio.com/items?itemName=ExodiusStudios.comment-anchors)_
