
# Tokens Request

## Structure

`TokensRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `scopes` | [`OAuthScopeOAuthACGEnum[]`](../../doc/models/o-auth-scope-o-auth-acg-enum.md) | Required | List of scopes that apply to the OAuth token<br>**Constraints**: *Unique Items Required* |

## Example (as JSON)

```json
{
  "scopes": [
    "file_requests.read",
    "selection",
    "test1"
  ]
}
```
