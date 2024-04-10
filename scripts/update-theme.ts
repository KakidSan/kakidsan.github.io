import { execSync } from 'node:child_process'
import consola from 'consola'

const TEMPLATE_REPO = 'https://github.com/moeyua/astro-theme-typography.git'
const TEMPLATE_REMOTE_NAME = 'template'

try {
  const remote = execSync('git remote').toString().trim()
  const isAdded = remote.split('\n').includes(TEMPLATE_REMOTE_NAME)

  if (!isAdded) {
    consola.info(`Adding remote ${TEMPLATE_REPO}`)
    execSync(`git remote add ${TEMPLATE_REMOTE_NAME} ${TEMPLATE_REPO}`)
  }

  consola.info('Fetching template')
  execSync(`git fetch ${TEMPLATE_REMOTE_NAME}`)
  execSync(`git merge ${TEMPLATE_REMOTE_NAME}/main --allow-unrelated-histories`)

  consola.success('Theme updated successfully')
} catch (error) {
  consola.error(error || 'Failed to update theme')
  process.exit(1)
}
