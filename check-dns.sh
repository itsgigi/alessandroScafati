#!/bin/bash

# Script di verifica DNS per alessandroscafati.it
# Esegui: chmod +x check-dns.sh && ./check-dns.sh

DOMAIN="alessandroscafati.it"

echo "=========================================="
echo "Verifica DNS per $DOMAIN"
echo "=========================================="
echo ""

echo "1. Record A (IPv4):"
dig +short $DOMAIN A
echo ""

echo "2. Record AAAA (IPv6):"
dig +short $DOMAIN AAAA
echo ""

echo "3. Record CNAME (www):"
dig +short www.$DOMAIN CNAME
echo ""

echo "4. Record MX (Email):"
dig +short $DOMAIN MX
echo ""

echo "5. Record TXT:"
dig +short $DOMAIN TXT
echo ""

echo "6. Record NS (Nameservers):"
dig +short $DOMAIN NS
echo ""

echo "7. Nameserver Authoritative:"
dig +short NS $DOMAIN
echo ""

echo "8. WHOIS Info (primi 20 righe):"
whois $DOMAIN | head -20
echo ""

echo "=========================================="
echo "PROSSIMI PASSI:"
echo "=========================================="
echo "1. Verifica su MXToolbox: https://mxtoolbox.com/blacklists.aspx"
echo "2. Controlla la reputazione IP su: https://www.abuseipdb.com/"
echo "3. Verifica su VirusTotal: https://www.virustotal.com/"
echo "4. Controlla propagazione DNS: https://www.whatsmydns.net/"
echo ""

