FROM checkraiser/odoo-14.0.1.1
USER root
ENV DEBIAN_FRONTEND noninteractive
COPY requirements.txt /tmp
RUN python3 -m pip install -r /tmp/requirements.txt
USER odoo
