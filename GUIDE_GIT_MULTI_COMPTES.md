# Guide : Basculer entre deux comptes GitHub (AkiSlime et giberne)

## Configuration actuelle

Vous avez deux comptes GitHub configurés avec SSH :
- **AkiSlime** : clé SSH `~/.ssh/id_ed25519_akislime`
- **giberne** : clé SSH `~/.ssh/id_ed25519_giberne`

## Pour basculer vers le compte GIBERNE

```bash
# 1. Changer l'URL remote pour utiliser SSH giberne
git remote set-url origin git@github.com-giberne:giberne/REPO_NAME.git

# 2. Configurer le nom d'utilisateur (local au projet)
git config user.name "giberne"

# 3. Configurer l'email (local au projet)
git config user.email "VOTRE_EMAIL_GIBERNE"

# 4. Vérifier la configuration
git config user.name
git config user.email
git remote -v
```

## Pour basculer vers le compte AKISLIME

```bash
# 1. Changer l'URL remote pour utiliser SSH akislime
git remote set-url origin git@github.com-akislime:AkiSlime/REPO_NAME.git

# 2. Configurer le nom d'utilisateur (local au projet)
git config user.name "AkiSlime"

# 3. Configurer l'email (local au projet)
git config user.email "akisama.eth@gmail.com"

# 4. Vérifier la configuration
git config user.name
git config user.email
git remote -v
```

## Tester la connexion SSH

```bash
# Tester la connexion avec giberne
ssh -T git@github.com-giberne

# Tester la connexion avec AkiSlime
ssh -T git@github.com-akislime
```

Vous devriez voir : `Hi USERNAME! You've successfully authenticated...`

## Commandes utiles

```bash
# Voir toutes les configurations Git du projet
git config --list --local

# Voir la configuration globale (par défaut)
git config --list --global

# Voir l'URL du remote actuel
git remote -v

# Changer juste l'URL sans toucher au user/email
git remote set-url origin NOUVELLE_URL
```

## Structure des URLs

- **Pour giberne** : `git@github.com-giberne:giberne/REPO_NAME.git`
- **Pour AkiSlime** : `git@github.com-akislime:AkiSlime/REPO_NAME.git`

**Important** : Remplacez `REPO_NAME` par le nom de votre repository (ex: `moretales`)

## Workflow typique

1. Cloner un nouveau projet avec le bon compte dès le départ
2. Configurer user.name et user.email localement dans chaque projet
3. Utiliser les bons hosts SSH (`github.com-giberne` ou `github.com-akislime`)

## Note

La configuration `user.name` et `user.email` avec `git config` (sans `--global`) s'applique **uniquement au projet actuel**. Cela permet d'avoir des configurations différentes par projet.
