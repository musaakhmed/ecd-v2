module.exports = function (migration) {
  const siteSettings = migration.editContentType('siteSettings')

  siteSettings
    .createField('rebrandingToastEnabled')
    .name('Rebranding toast enabled')
    .type('Boolean')
    .required(false)

  siteSettings
    .createField('rebrandingToastDurationMs')
    .name('Rebranding toast duration (ms)')
    .type('Number')
    .required(false)
    .validations([{ range: { min: 0, max: 600000 } }])

  siteSettings.changeFieldControl('rebrandingToastEnabled', 'builtin', 'boolean', {})
  siteSettings.changeFieldControl('rebrandingToastDurationMs', 'builtin', 'numberEditor', {
    helpText: 'Duration in milliseconds (e.g. 5000). Use 0 to keep it until dismissed.',
  })
}

