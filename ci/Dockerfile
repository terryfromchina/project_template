FROM checkraiser/odoo-14.0.1.2
USER root
ENV DEBIAN_FRONTEND noninteractive
COPY ../config/odoo.dev.conf /etc/odoo/odoo.conf
COPY ../addons /mnt/addons
COPY ../extra_addons /mnt/extra_addons
USER odoo
